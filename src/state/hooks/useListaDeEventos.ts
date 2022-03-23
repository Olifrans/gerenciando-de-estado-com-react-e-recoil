import { useRecoilValue } from 'recoil';
import { eventosfiltradosState } from '../seletores';


const useListaDeEventos = () => {
    return useRecoilValue(eventosfiltradosState)
}

export default useListaDeEventos;