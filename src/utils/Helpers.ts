import { API_URL } from "@/src/utils/Constants";

export const getAvatarUrl = (filename: string | null | undefined) => `${API_URL}storage/company/avatar/${filename}`;

export const getFieldUrl = (filename: string | null | undefined) => `${API_URL}storage/company/field/${filename}`;
