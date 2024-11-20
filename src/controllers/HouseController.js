import { response } from "express";
import BaseController from "../utils/BaseController";
import { houseService } from "../services/HouseService";



export class HouseController extends BaseController {
  constructor() {
    super('api/houses')
    this.router
      .get('', this.getHouses)
      .get('/:houseId', this.getHouseById)

  }


  async getHouses(request, response, next) {
    try {
      const houses = await houseService.getHouses()
      response.send(houses)
    } catch (error) {
      next(error)
    }
  }

  async getHouseById(request, response, next) {
    try {
      const houseId = request.params.houseId
      const house = await houseService.getHouseById(houseId)
      response.send(house)
    } catch (error) {
      next(error)
    }
  }

  getHouseByQuery(request, response, next) {

  }
}