import {AxiosResponse} from 'axios';

export interface ResponseEnvelope<T> {
    isOK: boolean;
    error?: Error;
    message?: string;
    response?: T;
}

export default function unwrapOrThrowError<T>(
    response: AxiosResponse<ResponseEnvelope<T>>,
    ignoreResponse = false
): T {
    if (response && response.data) {
        if (response.data.isOK) {
            if (ignoreResponse) {
                return {} as T;
            }

            if (response.data.response !== undefined) {
                return response.data.response;
            }
        }
    }

    throw new Error('Internal Server Error');
}
