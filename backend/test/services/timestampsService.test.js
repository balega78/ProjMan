import { timestampsService } from '../../src/services'

describe('timestampsService', () => {
    describe('generateTimeStamps', () => {
        it('should return object with current time in seconds and currentTime + (seconds from 1.par * 2.par) ', () => {
            const timeNow = Math.floor(Date.now() / 1000)
            const expectedOutput = {
                startedAt: timeNow,
                finishedAt: timeNow + (60)
            }
            const timestamps = timestampsService.generateTimestamps(2, 30)
            expect(timestamps).toEqual(expectedOutput)
        })
    })
})