import { buildingService } from '../../src/services';

describe('buildingService', () => {
  describe('isBuildingBelongsRightKingdom', () => {
    it('should true if kingdomId from 1. parameter is same like from second', () => {
      let testCase = buildingService.isBuildingBelongsRightKingdom({
        kingdomId: 1
      }, 1)
      expect(testCase).toEqual(true)
    }),
      it('should false if kingdomId from 1. parameter is not same like from second', () => {
        let testCase = buildingService.isBuildingBelongsRightKingdom({
          kingdomId: 2
        }, 1)
        expect(testCase).toEqual(false)
      })
  })
})
