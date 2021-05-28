import { FormEvent, useCallback, useRef } from 'react';
import * as S from './styles';

export type SearchProps = {
  label?: string;
  placeholder?: string;
  error?: string;
  onSubmit?: (inputValue: string) => void;
};

const Search = ({
  label = 'Type the name of your hero',
  placeholder = 'Ex: iron main',
  error = '',
  onSubmit,
}: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const inputValue = inputRef.current?.value || '';

      !!onSubmit && onSubmit(inputValue);
    },
    [onSubmit]
  );

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.Label htmlFor="search">
        {label}

        <S.InputWrapper>
          <S.Input id="search" ref={inputRef} placeholder={placeholder} />
          <S.Button type="submit">Search</S.Button>
        </S.InputWrapper>
      </S.Label>

      {!!error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
};

export default Search;
