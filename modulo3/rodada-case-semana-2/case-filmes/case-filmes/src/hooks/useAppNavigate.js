
import { useNavigate } from 'react-router-dom';

export const useAppNavigate = () => {
    const navigate = useNavigate();

    const GoToHome = () => {    
        navigate ('/')
      }
    
    const GoToMovieDetails = () => {    
        navigate ('/movie/:id')
      }
    
    const GoToSeach = () => {    
        navigate ('/seach')
      }

    return { GoToHome, GoToMovieDetails, GoToSeach };
}