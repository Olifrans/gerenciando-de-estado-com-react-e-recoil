import { useRecoilValue } from 'recoil';
//import { listaDeEventosState } from "../state/atom";
import { eventosfiltradosState } from '../state/seletores';


const useListaDeEventos = () => {
    //return useRecoilValue(listaDeEventosState)
    return useRecoilValue(eventosfiltradosState)
}

export default useListaDeEventos;