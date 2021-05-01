import { tokenService } from '../../src/services'

describe('tokenService', () => {
    describe('returnObjectFromToken', () => {
        it('should return object from token', () => {
            process.env.PRIVATE_KEY_VALUE = 'secretKey'
            const simulatedToken = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJraW5nZG9tSWQiOjh9.bBfXyOuG5eU2DcBnzMxAioH-Wy4c8APfr2Hfu2VHaPA'
            const expectedOutput = {
                kingdomId: 8
            }
            const objectFromToken = tokenService.returnObjectFromToken(simulatedToken)
            expect(objectFromToken).toEqual(expectedOutput)
        })
    }),
        describe('generateTokenResponse', () => {
            it('should return token object with status and message fields ', () => {
                const expectedObject = {
                    status: 'ok',
                    token: 'testToken123YXC'
                }
                const tokenObject = tokenService.generateTokenResponse('ok')('testToken123YXC')
                expect(tokenObject).toEqual(expectedObject)
            })
        })
})
