<template>
  <div>
    <div class="action_buttons">
      <h5>Inventory</h5>
      <ActionButton class="buttons" />
    </div>
    <div class="flex creation_forms">
      <div>
        <q-form
          @submit.prevent="handleSubmit"
          class="q-pa-md shadow-2 details_form flex"
        >
          <label>Product Name</label>
          <LongInput
            :placeholder="'Canon EOS Rebel T7'"
            v-model="product.ProductName"
            type="text"
            required
          />
          <SelectInput
            :label="'Select Product Category'"
            value
            :options="product.options"
            v-model="product.productCategory"
          />

          <div class="flex product_pricing">
            <LongInput
              :placeholder="'Selling price'"
              type="number"
              class="price_input"
              v-model="product.sellingprice"
            />
            <LongInput
              :placeholder="'Cost price'"
              type="number"
              class="price_input"
              v-model="product.costprice"
            />
          </div>
          <LongInput :placeholder="'Quantity in Stock'" type="number" />
          <SelectInput :label="'Order Type'" :options="product.order" />
          <div class="flex form_discount">
            <div>
              <label class="q-mr-md">Discount</label>
            </div>
            <div class="form_discounts">
              <label class="q-mr-md">Add Discount</label>
              <q-toggle v-model="product.vals" color="blue" />
            </div>
          </div>
          <div class="flex discount_values">
            <SelectInput
              :label="'Type'"
              :options="product.discounts"
              class="discount_input"
            />
            <LongInput :placeholder="'value'" class="discount_input" />
          </div>
          <div class="flex expiry_date">
            <div>
              <label class="q-mr-md">Expiry Date</label>
            </div>
            <div>
              <label class="q-mr-md">Add Expiry Date</label>
              <q-toggle v-model="product.vals" color="blue" />
            </div>
          </div>
          <LongInput type="date" />
          <div>
            <label>Product Long Description</label>
            <TextEditor v-model="product.description" />
            <span>Add a long description for your product</span>
          </div>
          <div class="flex return_policy q-pt-md">
            <div>
              <label>Return Policy</label>
            </div>
            <div>
              <label>Add Product</label>
              <q-toggle v-model="product.val" color="blue" />
            </div>
          </div>
          <label>Date Added</label>
          <div class="flex time_date">
            <LongInput type="date" class="q-mr-md form_date_time" />
            <LongInput type="time" class="q-mr-md form_date_time" />
          </div>
          <!-- <q-uploader
          v-model="image"
          label="Image"
          accept=".jpg,.png,.jpeg"
          @added="handleImageAdded"
        >
          <q-icon name="cloud_upload" />
        </q-uploader>
        <q-btn type="submit" label="Submit" class="q-mt-md" />-->
          <button type="submit">SUBMIT</button>
        </q-form>
      </div>

      <q-form class="q-pa-md shadow-2 q-mr-lg image_form">
        <div>
          <UploadFile style="height: 20rem" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import LongInput from "./LongInput.vue";
import SelectInput from "./SelectInput.vue";
import TextEditor from "./TextEditor.vue";
import UploadFile from "./UploadFile.vue";
import ActionButton from "./ActionButton.vue";
// import { mapState, mapActions } from "vuex";
import { mapActions } from "vuex";
import { publishProduct } from "src/store/Inventory/actions";
// import { publishProduct } from "@/store/Inventory/actions";
import { api } from "../../boot/axios";

export default {
  name: "MainForm",
  components: { LongInput, SelectInput, TextEditor, UploadFile, ActionButton },
  props: {
    label: {
      type: String,
      required: true,
    },

    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      product: {
        ProductName: "",
        description: "",
        costprice: null,
        sellingprice: null,
        discount: "",
        value: true,
        vals: true,
        val: false,
        order: ["return", "purchase", "in stock", "out of stock"],
        options: ["gadget", "automobile", "electronics", "groceries"],
        discounts: ["percentage", "fixed"],
        selected: "",
        category: "",
      },
    };
  },
  computed: {
    ...mapActions("inventory", ["publishProduct"]),
  },

  methods: {
    async handleSubmit() {
      // Form data
      const formData = {
        productName: this.ProductName,
        productLongDescription: this.description,
        sellingPrice: this.sellingprice,
        costprice: this.costprice,
        discount: this.discount,
        value: this.value,
        vals: this.vals,
        val: this.val,
        order: this.order,
        options: this.options,
        discounts: this.discounts,
      };

      // Call the action to publish the product
      try {
        await this.publishProduct(formData);
        console.log(res.data);
      } catch (error) {
        console.log(err.message);
      }
    },

    // async handleSubmit() {
    //   const formData = { ...this.product };
    //   try {
    //     await this.publishProduct(formData);
    //     console.log(res.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

    // ...mapActions("inventory", ["publishProduct"]),
    // handleSubmit() {
    //   const product = {
    //     name: this.productName,
    //     description: this.description,
    //     costprice: this.costprice,
    //     sellingprice: this.sellingprice,
    //   };
    //   this.publishProduct(product);
    // },

    // setup() {
    //   return {};
    // },

    // handleSubmit() {
    //   this.$api
    //     .post("inventory/publish", this.product)
    //     .then((res) => {
    //       response.data;
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err.message);
    //     });
    // },
  },
};
</script>
<!-- this.$api.post("inventory/publish", this.product)
  .then((response) => {
    console.log(response.data);
    // update component state or do something else with the response data
  })
  .catch((err) => {
    console.log(err.message);
  }); -->

<style scoped>
.creation_forms {
  gap: 3rem;
  flex-wrap: wrap;
  min-width: 100%;
}
.details_form {
  min-width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 2rem;
}
.image_form {
  min-width: 30%;
}
.product_pricing {
  flex-wrap: wrap;
  justify-content: space-between;
}
.price_input {
  width: 45%;
}
.form_discount {
  justify-content: space-between;
}
.discount_values {
  justify-content: space-between;
}
.discount_input {
  width: 45%;
}
.expiry_date {
  justify-content: space-between;
}
.return_policy {
  justify-content: space-between;
}
.time_date {
  justify-content: space-between;
}
.form_date_time {
  width: 45%;
}
.action_buttons {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
h5 {
  padding-left: 5rem;
  padding-top: 2rem;
}

@media (max-width: 760px) {
  .details_form {
    margin-left: 0;
  }
  .creation_forms {
    justify-content: center;
    padding: 1rem;
  }
  .image_form {
    min-width: 100%;
    margin: 0 auto;
  }
  .buttons {
    min-width: 1rem;
    margin-top: 0;
  }
}

@media (min-width: 770px) {
  .image_form {
    min-width: 20%;
    margin: 0 auto;
  }
  .details_form {
    min-width: 50%;
  }
  .creation_forms {
    gap: 1rem;
  }
}
</style>
