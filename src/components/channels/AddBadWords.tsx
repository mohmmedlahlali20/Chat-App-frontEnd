import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import {useDispatch} from 'react-redux';
import path from '../../axios/axios';
import {addBadWords} from '../../Redux/Slices/Channel/ChannelSlice';

interface AddBadWordsProps {
    channelId: string;
}

function AddBadWords({channelId}: AddBadWordsProps) {
    const [badWord, setBadWord] = useState('');
    const [badWordsList, setBadWordsList] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();

    const handleToggleAddBadWords = () => {
        dispatch(addBadWords({channelId, badWords: badWordsList}));
    };

    const handleAddingBadWords = async () => {
        if (isSubmitting || badWordsList.length === 0) return;

        setIsSubmitting(true);
        try {
            const response = await path.patch(`/channels/${channelId}/addBadWords`, {badWords: badWordsList});
            console.log('Bad words added successfully:', response.data);


            setBadWordsList([]);
            setBadWord('');

            handleToggleAddBadWords();
        } catch (e) {
            console.error('Error adding bad words: ', e);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDeleteBadWord = (index: number) => {
        setBadWordsList(badWordsList.filter((_, i) => i !== index));
    };

    const handleAddBadWord = () => {
        if (badWord.trim() && !badWordsList.includes(badWord.trim())) {
            setBadWordsList([...badWordsList, badWord.trim()]);
            setBadWord('');
        }
    };

    return (
        <div className="p-4 border rounded shadow-md max-w-sm mx-auto">
            <h2 className="text-lg font-semibold mb-4">Add Bad Words</h2>
            <div className="flex items-center mb-4">
                <input
                    type="text"
                    placeholder="Enter a bad word"
                    value={badWord}
                    onChange={(e) => setBadWord(e.target.value)}
                    className="flex-grow p-2 border rounded-l"
                />
                <IconButton onClick={handleAddBadWord} color="primary" aria-label="Add bad word">
                    <AddIcon/>
                </IconButton>
            </div>

            <ul className="mb-4">
                {badWordsList.map((word, index) => (
                    <li key={index} className="flex justify-between items-center p-2 border-b">
                        <span>{word}</span>
                        <button onClick={() => handleDeleteBadWord(index)} className="text-red-500">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            <button
                onClick={handleAddingBadWords}
                disabled={isSubmitting || badWordsList.length === 0}
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
            >
                {isSubmitting ? 'Adding...' : 'Save Bad Words'}
            </button>
        </div>
    );
}

export default AddBadWords;
