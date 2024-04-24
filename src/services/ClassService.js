import axios from "axios";

const CLASS_DETAILS_API_BASE_URL = "http://localhost:8080/api/v1/details";

class ClassService{
    getDetails(){
        return axios.get(CLASS_DETAILS_API_BASE_URL);
    }
    createDetail(classDetail){
        return axios.post(CLASS_DETAILS_API_BASE_URL,classDetail);
    }
    getClassById(id) {
        return axios.get(`${CLASS_DETAILS_API_BASE_URL}/${id}`);
    }

    updateDetail = async (classId, detail) => {
        try {
            const response = await axios.put(`${CLASS_DETAILS_API_BASE_URL}/${classId}`, detail);
            console.log("Update successful:", response.data);
            return response.data; 
        } catch (error) {
            console.error("Error updating student:", error);
            throw error; 
        }
    };

    removeDetail = async (detailId) => {
        try {
            const response = await axios.delete(CLASS_DETAILS_API_BASE_URL + '/' + detailId);
            // Handle successful response
            console.log('deleted successfully:', response.data);
            return response.data; 
        } catch (error) {
            // Handle error
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error('Server responded with status code:', error.response.status);
                console.error('Response data:', error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error:', error.message);
            }
            console.error('Error config:', error.config);
            throw error; // Re-throw the error to propagate it further if needed
        }
    }
}

export default new ClassService()

/*Model: Represents the data and business logic.
View: Represents the presentation layer.
Controller: Handles user requests, processes them, and returns responses.
Repository: Acts as an interface between the application and the data source, providing methods to perform database operations.*/