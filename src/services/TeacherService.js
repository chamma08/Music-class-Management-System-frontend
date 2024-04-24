import axios from 'axios';

const TEACHER_API_BASE_URL = "http://localhost:8080/api/v1/teachers";

class TeacherService{

    getTeachers(){
        return axios.get(TEACHER_API_BASE_URL);
    }

    createTeacher(teacher){
        return axios.post(TEACHER_API_BASE_URL,teacher);
    }

    getTeacherById(id) {
        return axios.get(`${TEACHER_API_BASE_URL}/${id}`);
    }

    updateTeacher = async (teacherId, teacher) => {
        try {
            const response = await axios.put(`${TEACHER_API_BASE_URL}/${teacherId}`, teacher);
            console.log("Update successful:", response.data);
            return response.data; // Return the updated teacher data if needed
        } catch (error) {
            console.error("Error updating teacher:", error);
            throw error; // Rethrow the error to be handled by the caller
        }
    };
    
    deleteTeacher = async (teacherId) => {
        try {
            const response = await axios.delete(TEACHER_API_BASE_URL + '/' + teacherId);
            // Handle successful response
            console.log('Teacher deleted successfully:', response.data);
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

export default new TeacherService()