import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { addChannel } from '../../Redux/Slices/Channel/ChannelSlice';
import {
    Button,
    IconButton,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Popper,
    Paper,
    Checkbox,
    ListItemText
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import { SelectChangeEvent } from '@mui/material/Select';
import { useGetUsersQuery } from '../../services/userApi.tsx';
import path from '../../axios/axios.ts'

function CreateChannel() {
    const [channelName, setChannelName] = useState('');
    const [channelType, setChannelType] = useState('private');
    const [members, setMembers] = useState<string[]>([]);
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const dispatch = useDispatch();
    const userId = '6725462b4c93c6bb37c7a971';

    const { data: allUsers = [], isLoading, error } = useGetUsersQuery();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await path.post('/channels', {
                Title: channelName,
                members,
                type: channelType,
                userId,
            });
            dispatch(addChannel(response.data));

            Swal.fire({
                icon: 'success',
                title: 'Succès',
                text: 'Le canal a été créé avec succès !',
                timer: 2000,
                showConfirmButton: false,
            });

            setChannelName('');
            setMembers([]);
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: 'Échec de la création du canal. Veuillez réessayer.',
            });
        }
    };

    const handleMembersChange = (event: SelectChangeEvent<typeof members>) => {
        const { value } = event.target;
        setMembers(typeof value === 'string' ? value.split(',') : value);
    };

    const togglePopup = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <div>
            <IconButton color="primary" onClick={togglePopup} aria-label="Add Channel">
                <AddIcon />
            </IconButton>

            <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
                <Paper className="p-4 shadow-md border border-gray-200 w-64">
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <TextField
                            label="Nom du Canal"
                            variant="outlined"
                            fullWidth
                            value={channelName}
                            onChange={(e) => setChannelName(e.target.value)}
                            required
                        />

                        <FormControl fullWidth variant="outlined">
                            <InputLabel>Type de Canal</InputLabel>
                            <Select
                                value={channelType}
                                onChange={(e) => setChannelType(e.target.value as string)}
                                label="Type de Canal"
                            >
                                <MenuItem value="public">Public</MenuItem>
                                <MenuItem value="private">Privé</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth variant="outlined">
                            <InputLabel>Membres</InputLabel>
                            {isLoading ? (
                                <p>Loading...</p>
                            ) : error ? (
                                <p>Error fetching users</p>
                            ) : (
                                <Select
                                    multiple
                                    value={members}
                                    onChange={handleMembersChange}
                                    renderValue={(selected) => selected.join(', ')}
                                    label="Membres"
                                >
                                    {allUsers.map((user) => (
                                        <MenuItem key={user._id} value={user._id}>
                                            <Checkbox checked={members.includes(user._id)} />
                                            <ListItemText primary={user.name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            )}
                        </FormControl>

                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Créer le Canal
                        </Button>
                    </form>
                </Paper>
            </Popper>
        </div>
    );
}

export default CreateChannel;
