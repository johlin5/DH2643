export const isNull = (field: any) => field === null;
export const validatePassword = (password: string) => {
    const regex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
    return regex.test(password) ? true : false;
}
