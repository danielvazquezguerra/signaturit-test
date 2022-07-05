const axios = require('axios');

export const allFiles = async () => {

    try {
        
        const allFiles = await axios.get('http://localhost:3002/all');
        return allFiles;
        // console.log(allFiles);
    
    } catch (error) {
    
        console.error(error)
        
    }


}

// export default apiRequest;

