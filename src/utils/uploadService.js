import axios from 'axios';

const uploadFile = (image) => {
    return axios.post('/api/uploads', {
        data: image.split(',')[1],
    });
};

export default uploadFile;
