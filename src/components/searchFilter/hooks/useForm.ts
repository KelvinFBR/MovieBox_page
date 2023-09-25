import { RootState } from '@/store';
import { setSearchValue } from '@/store/slices/filterSlice'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'


export const useForm = (searchRef: React.RefObject<HTMLInputElement>) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { year, sort, titleType, titleTypes, search } = useSelector((state: RootState) => state.filter);

  const haddleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!searchRef.current?.value) return
    const typeSortValid = sort !== 'ordenar'
      ? sort === 'ascendente' ? 'incr' : 'decr'
      : 'decr';
    const yearValid = year !== 'Año' ? year : ''
    const titleTypeValid = titleType !== 'Titulo' ? titleType : ''

    router.push(`/search?q=${searchRef.current.value}${typeSortValid ? `&sort=year.${typeSortValid}` : ''}${titleTypeValid ? `&titleType=${titleTypeValid}` : ''}${yearValid ? `&year=${yearValid}` : ''}`)
  }

  const haddleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setSearchValue(value))
  }

  return {
    // Methods
    haddleSubmit,
    haddleChange,
  }
}
