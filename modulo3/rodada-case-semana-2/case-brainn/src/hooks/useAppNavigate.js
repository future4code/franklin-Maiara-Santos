
import { useNavigate } from 'react-router-dom';

export const useAppNavigate = () => {
    const navigate = useNavigate();

    const GoToDiadeSorte = () => {    
        navigate ('/diadesorte')
      }
    
    const GoToMegaSena = () => {    
        navigate ('/megasena')
      }
    
    const GoToLotofacil = () => {    
        navigate ('/lotofacil')
      }
    
    const GoToQuina = () => {    
        navigate ('/quina')
      }
    
    const GoToLotomania = () => {    
        navigate ('/lotomania')
      }
    
    const GoToTimemania = () => {    
        navigate ('/timemania')
      }

    return { GoToDiadeSorte, GoToMegaSena, GoToLotofacil, GoToQuina, GoToLotomania, GoToTimemania };
}



  