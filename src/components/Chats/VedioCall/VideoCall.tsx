import React, { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../Redux/Store/store';
import { setLocalStreamId, setRemoteStreamId } from '../../../Redux/Slices/videoCallSlice/videoCallSlice';

const socket = io(import.meta.env.VITE_NEST_API_URL);

const VideoCall: React.FC = () => {
    const dispatch = useDispatch();
    const localVideoRef = useRef<HTMLVideoElement>(null);
    const remoteVideoRef = useRef<HTMLVideoElement>(null);
    const peerConnection = useRef<RTCPeerConnection | null>(null);
    const localStreamRef = useRef<MediaStream | null>(null);

    useEffect(() => {
        const initLocalStream = async () => {
            try {
                if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                    localStreamRef.current = stream;
                    dispatch(setLocalStreamId(stream.id));
                    if (localVideoRef.current) {
                        localVideoRef.current.srcObject = stream;
                    }
                } else {
                    console.error("getUserMedia n'est pas supporté dans ce navigateur.");
                    alert("Votre navigateur ne supporte pas l'accès à la caméra et au microphone.");
                }
            } catch (error) {
                console.error("Erreur lors de l'accès à la caméra : ", error);
                alert("Erreur lors de l'accès à la caméra et au microphone. Veuillez vérifier les permissions.");
            }
        };



        const initPeerConnection = () => {
            peerConnection.current = new RTCPeerConnection();
            peerConnection.current.onicecandidate = event => {
                if (event.candidate) {
                    socket.emit('ice-candidate', { candidate: event.candidate });
                }
            };

            peerConnection.current.ontrack = event => {
                if (remoteVideoRef.current) {
                    remoteVideoRef.current.srcObject = event.streams[0];
                    dispatch(setRemoteStreamId(event.streams[0].id));
                }
            };

            if (localStreamRef.current) {
                localStreamRef.current.getTracks().forEach(track => {
                    peerConnection.current?.addTrack(track, localStreamRef.current!);
                });
            }
        };

        initLocalStream();
        initPeerConnection();

        return () => {
            peerConnection.current?.close();
        };
    }, [dispatch]);

    const callUser = async (to: string) => {
        if (peerConnection.current) {
            const offer = await peerConnection.current.createOffer();
            await peerConnection.current.setLocalDescription(offer);
            socket.emit('offer', { offer, to });
        }
    };

    useEffect(() => {
        socket.on('offer', async ({ offer, from }) => {
            if (peerConnection.current) {
                await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
                const answer = await peerConnection.current.createAnswer();
                await peerConnection.current.setLocalDescription(answer);
                socket.emit('answer', { answer, to: from });
            }
        });

        socket.on('answer', async ({ answer }) => {
            if (peerConnection.current) {
                await peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
            }
        });

        socket.on('ice-candidate', async ({ candidate }) => {
            if (peerConnection.current && candidate) {
                await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
            }
        });

        return () => {
            socket.off('offer');
            socket.off('answer');
            socket.off('ice-candidate');
        };
    }, []);

    return (
        <div>
            <video ref={localVideoRef} autoPlay muted />
            <video ref={remoteVideoRef} autoPlay />
            <button onClick={() => callUser("peerId")}>Appeler</button>
        </div>
    );
};

export default VideoCall;
