
export const Homepage  =  async (request, response) : Promise<void> => {

        try {
            response.json({"msg": "this is the backend"})
        } catch (error) {
            response.status(500).json({"msg": "Internal Server Error"})                
        }
    }


 