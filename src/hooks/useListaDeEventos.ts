import { useRecoilValue } from 'recoil';
import { eventosfiltradosState } from '../state/seletores';


const useListaDeEventos = () => {
    return useRecoilValue(eventosfiltradosState)
}

export default useListaDeEventos;