
import productionService from "@/services/production/production.service"
import productionFabricService from "@/services/production/production-fabric.service"
import productionAccessoryService from "@/services/production/production-accessory.service"
import productionServiceService from "@/services/production/production-service.service"
import productionDatasheetService from "@/services/production/production-datasheet.service"

const state = {

}

const mutations = {

}

const getters = {

}

const actions = {
    async A_GET_PRODUCTIONS({ commit }, params) {
        try {
            const response = await productionService.getProductions(params)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_PRODUCTIONS_BY_USER({ commit }, id) {
        try {
            const response = await productionService.getProductionsByUser(id)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_PRODUCTION_BY_ID({ commit }, id) {
        try {
            const response = await productionService.getProductionById(id)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_REGISTER_PRODUCTION({ commit }, body) {
        try {
            const response = await productionService.registerProduction(body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_UPDATE_PRODUCTION({ commit }, { id, body }) {
        try {
            const response = await productionService.updateProductions(id, body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_DELETE_PRODUCTION({ commit }, id) {
        try {
            const response = await productionService.deleteProduction(id)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_PRODUCTION_FABRICS({ commit }, params) {
        try {
            const response = await productionFabricService.getFabrics(params)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_PRODUCTION_FABRICS_PAGINATE({ commit }, { page, params }) {
        try {
            const response = await productionFabricService.getFabricsPaginate(page, params)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_PRODUCTION_FABRIC_BY_ID({ commit }, id) {
        try {
            const response = await productionFabricService.getFabricById(id)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_REGISTER_PRODUCTION_FABRIC({ commit }, body) {
        try {
            const response = await productionFabricService.registerFabric(body);
            return response
        } catch (error) {
            throw error
        }
    },
    async A_UPDATE_PRODUCTION_FABRIC({ commit }, { id, body }) {
        try {
            const response = await productionFabricService.updateFabric(id, body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_DELETE_PRODUCTION_FABRIC({ commit }, id) {
        try {
            const response = await productionFabricService.deleteFabric(id)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_PRODUCTION_ACCESSORIES({ commit }, params) {
        try {
            const response = await productionAccessoryService.getAccessories(params)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_PRODUCTION_ACCESSORIES_PAGINATE({ commit }, { page, params }) {
        try {
            const response = await productionAccessoryService.getAccessoriesPaginate(page, params)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_PRODUCTION_ACCESSORY_BY_ID({ commit }, id) {
        try {
            const response = await productionAccessoryService.getAccessoriesById(id)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_REGISTER_PRODUCTION_ACCESSORY({ commit }, body) {
        try {
            const response = await productionAccessoryService.registerAccessory(body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_UPDATE_PRODUCTION_ACCESSORY({ commit }, { id, body }) {
        try {
            const response = await productionAccessoryService.updateAccessory(id, body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_DELETE_PRODUCTION_ACCESSORY({ commit }, id) {
        try {
            const response = await productionAccessoryService.deleteAccessory(id)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_PRODUCTION_SERVICES({ commit }, params) {
        try {
            const response = await productionServiceService.getServices(params)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_PRODUCTION_SERVICES_PAGINATE({ commit }, { page, params }) {
        try {
            const response = await productionServiceService.getServicesPaginate(page, params)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_PRODUCTION_SERVICE_BY_ID({ commit }, id) {
        try {
            const response = await productionServiceService.getServiceById(id)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_REGISTER_PRODUCTION_SERVICE({ commit }, body) {
        try {
            const response = await productionServiceService.registerService(body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_UPDATE_PRODUCTION_SERVICE({ commit }, { id, body }) {
        try {
            const response = await productionServiceService.updateService(id, body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_DELETE_PRODUCTION_SERVICE({ commit }, id) {
        try {
            const response = await productionServiceService.deleteService(id)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_REGISTER_PRODUCTION_DATASHEET({ commit }, body) {
        try {
            const response = await productionDatasheetService.registerDatasheet(body)
            return response
        } catch (error) {
            throw error
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}