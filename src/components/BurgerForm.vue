<template>
  <div>
    <Message v-show="msg" :msg="msg" />
    <div>
      <form id="burger-form" @submit="createBurger">
        <div class="input-container">
          <label for="nome">お客様名: </label>
          <input
            id="nome"
            v-model="nome"
            type="text"
            name="nome"
            placeholder="お客様のお名前を入力してください"
          />
        </div>
        <div class="input-container">
          <label for="pao">パンの種類:</label>
          <select id="pao" v-model="pao" name="pao">
            <option value="">パンをお選びください</option>
            <option v-for="pae in paes" :key="pae.id" :value="pae.tipo">
              {{ pae.tipo }}
            </option>
          </select>
        </div>
        <div class="input-container">
          <label for="carne">お肉の種類:</label>
          <select id="carne" v-model="carne" name="carne">
            <option value="">お肉を選ぶ</option>
            <option v-for="carn in carnes" :key="carn.id" :value="carn.tipo">
              {{ carn.tipo }}
            </option>
          </select>
        </div>
        <div id="opcionais-container" class="input-container">
          <label id="opcionais-title" for="opcionais">
            オプションメニュー:
          </label>
          <div
            v-for="opcional in opcionaisdata"
            :key="opcional.id"
            class="checkbox-container"
          >
            <input
              v-model="opcionais"
              type="checkbox"
              name="opcionais"
              :value="opcional.tipo"
            />
            <span>{{ opcional.tipo }}</span>
          </div>
        </div>
        <div class="input-container">
          <input type="submit" class="submit-btn" value="Criar meu Burger" />
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Message from "./Message.vue";

type data = {
  id: string;
  tipo: string;
};

type ingredientes = {
  paes?: data[];
  carnes?: data[];
  opcionaisdata?: data[];
  nome: string;
  pao: string;
  carne: string;
  opcionais: string[];
  status: string;
  msg: string;
};

export default {
  name: "BurgerForm",
  components: {
    Message,
  },
  data(): ingredientes {
    return {
      paes: undefined,
      carnes: undefined,
      opcionaisdata: undefined,
      nome: "",
      pao: "",
      carne: "",
      opcionais: [],
      status: "",
      msg: "",
    };
  },
  mounted() {
    this.getIngredientes();
  },
  methods: {
    async getIngredientes() {
      const req = await fetch("http://localhost:3000/ingredientes");
      console.log(req);
      const data = await req.json();
      console.log("取得Data", data);

      this.paes = data.paes;
      this.carnes = data.carnes;
      this.opcionaisdata = data.opcionais;
    },
    async createBurger(e: any) {
      e.preventDefault();

      const data = {
        nome: this.nome,
        carne: this.carne,
        pao: this.pao,
        opcionais: Array.from(this.opcionais),
        status: "Solicitado",
      };

      //transform date as json text
      const dataJson = JSON.stringify(data);

      const req = await fetch("http://localhost:3000/burgers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();

      // colocar uma msg no sistema
      this.msg = `Pedido N° ${res.id} realizado com sucesso.`;
      // limpar msg
      setTimeout(() => (this.msg = ""), 3000);
      // limpar dados do input
      this.nome = "";
      this.carne = "";
      this.pao = "";
      this.opcionais = [];
    },
  },
};
</script>

<style scoped>
#burger-form {
  max-width: 400px;
  display: flex;
  flex-direction: column;
}

.input-container {
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}

input,
select {
  padding: 5px 10px;
  width: 300px;
}

#opcionais-container {
  flex-direction: row;
  flex-wrap: wrap;
}

#opcionais-title {
  width: 100%;
}

.checkbox-container {
  display: flex;
  align-items: center;
  width: 50%;
  margin-bottom: 20px;
}

.checkbox-container span,
.checkbox-container input {
  width: auto;
}

.checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
}

.submit-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s;
}

.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>
