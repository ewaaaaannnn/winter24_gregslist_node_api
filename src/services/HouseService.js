import { dbContext } from "../db/DbContext"

class HouseService {
  async getHouses() {
    const houses = await dbContext.Houses.find()
    return houses
  }

  async getHouseById(houseId) {
    const house = (await dbContext.Houses.findById(houseId))
    if (house == null) {
      throw new Error(`Invalid house id ${houseId}`)
    }
    return house
  }



}

export const houseService = new HouseService()