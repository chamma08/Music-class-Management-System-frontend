import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/students";

class StudentService{
    getStudents(){
        return axios.get(STUDENT_API_BASE_URL);
    }
    createStudent(student){
        return axios.post(STUDENT_API_BASE_URL,student);
    }

    getStudentById(id) {
        return axios.get(`${STUDENT_API_BASE_URL}/${id}`);
    }

    updateStudent = async (studentId, student) => {
        try {
            const response = await axios.put(`${STUDENT_API_BASE_URL}/${studentId}`, student);
            console.log("Update successful:", response.data);
            return response.data; 
        } catch (error) {
            console.error("Error updating student:", error);
            throw error; 
        }
    };
    
    deleteStudent = async (studentId) => {
        try {
            const response = await axios.delete(STUDENT_API_BASE_URL + '/' + studentId);
            // Handle successful response
            console.log('Student deleted successfully:', response.data);
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

export default new StudentService()