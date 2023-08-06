import { validateEmail, validatePassword } from "../../helpers/validateCredentials"


describe('Email validator', () => {
    it('should return False on invalid email ids', () => {
        const invalidMailId_1 = 'testMail'
        const invalidMailId_2 = 'mail&%%$123 .com'
        const invalidMailId_3 = '@invalid.com'
        expect(validateEmail(invalidMailId_1)).toBeFalsy()
        expect(validateEmail(invalidMailId_2)).toBeFalsy()
        expect(validateEmail(invalidMailId_3)).toBeFalsy()
    })

    it('should return True on a valid email Id', () => {
        const validMailId = 'abc@gmail.com'
        expect(validateEmail(validMailId)).toBeTruthy()
    })
})


describe('Password validator', () => {
    it('should return False on passwords with fewer than 8 chars', () => {
        const invalidPassword = 'abc@123'
        expect(validatePassword(invalidPassword)).toBeFalsy()
    })
    it('should return False on passwords without any capital letter', () => {
        const invalidPassword = 'abc@123abc'
        expect(validatePassword(invalidPassword)).toBeFalsy()
    })

    it('should return False on passwords without any special chars', () => {
        const invalidPassword = 'Abc123abc'
        expect(validatePassword(invalidPassword)).toBeFalsy()
    })
    it('should return False on passwords without any small letters', () => {
        const invalidPassword = 'ABCD123@123'
        expect(validatePassword(invalidPassword)).toBeFalsy()
    })
    it('should return False on passwords without any digits', () => {
        const invalidPassword = 'ABCDzxy@abc'
        expect(validatePassword(invalidPassword)).toBeFalsy()
    })
    it('should return True on a valid password', () => {
        const validPassword = 'a^b@C123j*T'
        expect(validatePassword(validPassword)).toBeTruthy()
    })
})