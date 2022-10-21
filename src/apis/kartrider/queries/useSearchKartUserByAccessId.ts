import { AxiosError } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import apiClient from '@libs/api-client';
import queryKeys from '@constants/query-keys';
import {
  SearchKartUserByAccessIdInput,
  SearchKartUserByAccessIdOutput,
} from '@apis/kartrider/dtos/search-kart-user-by-access-id.dto';

async function searchKartUserByAccessId({
  accessId,
}: SearchKartUserByAccessIdInput) {
  const result = await apiClient({
    url: `/kartrider/users/${accessId}`,
    method: 'GET',
  });

  return result;
}

function useSearchKartUserByAccessId(
  searchKartUserByAccessIdInput: SearchKartUserByAccessIdInput,
): UseQueryResult<
  SearchKartUserByAccessIdOutput,
  AxiosError<SearchKartUserByAccessIdOutput>
> {
  return useQuery(
    queryKeys.KARTRIDER.SEARCH_USER_BY_ACCESS_ID,
    () => searchKartUserByAccessId(searchKartUserByAccessIdInput),
    {
      select: ({ data }) => data,
      enabled: !!searchKartUserByAccessIdInput.accessId,
    },
  );
}

export default useSearchKartUserByAccessId;
