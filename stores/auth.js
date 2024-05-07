export const useAuthStore = defineStore('auth', {
    state: () => ({ 
      user:{},
    }),
    getters: {
      getUser: (state) => state.user
    },
    persist: {
      storage: persistedState.localStorage,
    },
    actions: {
        async login (formData){
            const config = useRuntimeConfig();
            try{
               const {data} = await $fetch(config.public.BASE_URL+'/login',{
                  method:"POST",
                  body:{ ...formData},
               });
               this.commonSetter(data)
            }catch (error){
              throw error;
            }
          },
          async register (formData){
            const config = useRuntimeConfig();
            try{
               const {data} = await $fetch(config.public.BASE_URL+'/register',{
                  method:"POST",
                  headers:{
                    Accept: "application/json",
                    Authorization: `Bearer ${token.getToken}`,
                  },
                  body:{ ...formData},
               });
               this.commonSetter(data)
            }catch (error){
              throw error;
            }
          },
          async logout (){
            const token = useTokenStore();
            const config = useRuntimeConfig();
            try{
               const res = await $fetch(config.public.BASE_URL+'/logout',{
                  method:"POST",
                  headers:{
                    Accept: "application/json",
                    Authorization: `Bearer ${token.getToken}`,
                  }
               });
               token.removeToken();
               console.log(res);
            }catch (error){
              throw error;
            }
          },
          commonSetter(data){
            const token = useTokenStore();
            token.setToken(data.token);
            this.user= data.user;
            if (this.user.rol == "Admin") {
              return navigateTo('/admin/users')
            }
            if(this.user.rol == "Generalist"){
              return navigateTo('/generalist/users')
            }
            if(this.user.rol == "Boss"){
              return navigateTo('/Boss')
            }

          },

    },
  })