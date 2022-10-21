import { AxiosError } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import apiClient from '@libs/api-client';
import queryKeys from '@constants/query-keys';
import {
  SearchKartUserByNicknameInput,
  SearchKartUserByNicknameOutput,
} from '@apis/kartrider/dtos/search-kart-user-by-nickname.dto';

async function searchKartUserByNickname({
  nickname,
}: SearchKartUserByNicknameInput) {
  const result = await apiClient({
    url: `/kartrider/users/nickname/${nickname}`,
    method: 'GET',
  });

  return result;
}

function useSearchKartUserByNickname(
  searchKartUserByNicknameInput: SearchKartUserByNicknameInput,
): UseQueryResult<
  SearchKartUserByNicknameOutput,
  AxiosError<SearchKartUserByNicknameOutput>
> {
  return useQuery(
    queryKeys.KARTRIDER.SEARCH_USER_BY_NICKNAME,
    () => searchKartUserByNickname(searchKartUserByNicknameInput),
    {
      select: ({ data }) => data,
      enabled: false,
    },
  );
}

export default useSearchKartUserByNickname;
