import { ICreditsInterface } from '../interfaces';
import { urls } from '../configs';

import { axiosService, IRes } from './axiosService';

const creditService = {
    getAll: ( id: number ):IRes<ICreditsInterface> => axiosService.get(urls.credits.base(id)),
};

export { creditService };
