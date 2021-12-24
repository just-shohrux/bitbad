<template>
  <div class="table__box mt-3">
    <h2 class="table__title">Buyurtmalar</h2>
    <div
      class="d-flex justify-content-between align-items-center flex-column flex-sm-row"
    >
      <div class="table__dropdown mb-3 mb-sm-0">
        <div class="title">Qator soni:</div>
        <div
          class="content"
          @click="show = !show"
          v-click-outside="onClickOutside"
        >
          <span>{{ selected }}</span>
          <i
            class="bx"
            :class="{ 'bx-chevron-down': !show, 'bx-chevron-up': show }"
          ></i>
        </div>
        <ul class="dropdown__box" :class="{ 'd-block': show }">
          <li v-for="(number, i) in numbers" :key="number" @click="selectId(i)">
            <i v-if="selectedId === i" class="bx bx-check"></i>
            {{ number }}
          </li>
        </ul>
      </div>
      <form class="table__search" @submit.prevent="searchTableData">
        <input type="text" v-model.trim="query" placeholder="Qidiruv" />
        <button type="submit"><i class="bx bx-search"></i></button>
      </form>
    </div>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>SANA</th>
            <th class="text-center">XARIDOR</th>
            <th class="text-center">MAHSULOT</th>
            <th class="text-center">VILOYAT</th>
            <th class="text-center">HOLAT</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-if="ordersList.length == 0" class="text-center">
            <td colspan="6">Buyurtmalar mavjud emas</td>
          </tr> -->
          <tr v-for="(order, i) in orders" :key="i">
            <td>{{ order.created_at }}</td>
            <td class="text-center">{{ order.client_name }}</td>
            <td class="text-center">
              {{ order.product  }}
            </td>
             <td class="text-center">
              {{ order.region  }}
            </td>
            <td class="text-center">
              <span
                :class="{
                  hold__badge: order.status == 'hold',
                  blue__badge: order.status == 'sotildi',
                  pink__badge: order.status == 'sotilmadi',
                }"
                >{{ order.status }}</span
              >
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Sana</td>
            <td class="text-center">Xaridor</td>
            <td class="text-center">Mahsulot</td>
            <td class="text-center">Viloyat</td>
            <td class="text-center">Holat</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <ul class="table__pagination pagination">
      <li class="prev pagination__item" @click="prev">
        <i class="bx bx-chevron-left"></i>
      </li>
      <li
        class="pagination__item"
        v-for="i in page"
        :key="i"
        :class="{ active: i == current }"
        @click="current = i"
      >
        {{ i }}
      </li>
      <li class="next pagination__item" @click="next">
        <i class="bx bx-chevron-right"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import vClickOutside from "v-click-outside";
import slice from "lodash/slice";
import round from "lodash/round";
import orderBy from "lodash/orderBy";
import { mapState } from "vuex";
import get from "lodash/get";
export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      query: "",
      show: false,
      selectedId: 0,
      numbers: [5, 10, 15, 20],
      ordersList: this.orders,
      page: 1,
      current: 1,
    };
  },
  watch: {
    selectedId: function (val) {
      this.transactionsList = slice(
        [
          ...orderBy(
            this.transactions,
            ["id", "amount"],
            ["desc", this.asc ? "asc" : "desc"]
          ),
        ],
        0,
        this.numbers[val]
      );
      this.pagination(this.numbers[val], this.transactions.length);
    },
    current: function (val) {
      this.transactionsList = slice(
        [
          ...orderBy(
            this.transactions,
            ["id", "amount"],
            ["desc", this.asc ? "asc" : "desc"]
          ),
        ],
        this.numbers[val - 1],
        this.numbers[val]
      );
    },
  },
  computed: {
    ...mapState({
      orders: (state) =>
        get(state, "dashboard.orders.data.results", []),
      isFetched: (state) =>
        get(state, "dashboard.orders.isFetched", false),
    }),
    selected() {
      return this.numbers[this.selectedId];
    },
  },
  methods: {
    searchTableData() {
      console.log(this.query);
    },
    selectId(i) {
      this.selectedId = i;
      this.show = false;
    },
    onClickOutside() {
      this.show = false;
    },
    pagination(current, all) {
      this.page = round(all / current);
    },
    prev() {
      if (this.current > 1) {
        this.current--;
      }
    },
    next() {
      if (this.current < this.page) {
        this.current++;
      }
    },
  },
  mounted() {
    
  },
};
</script>

<style lang="scss" scoped>
.pink__badge {
  padding: 5px 10px;
  color: #fff;
  background-color: #f19f9d;
  border-radius: 15px;
  display: inline-block;
  min-width: 115px;
  text-align: center;
}
.blue__badge {
  padding: 5px 10px;
  color: #fff;
  background-color: #006400;
  border-radius: 15px;
  display: inline-block;
  min-width: 115px;
  text-align: center;
}
.hold__badge {
  padding: 5px 10px;
  color: #fff;
  background-color: #99cf67;
  border-radius: 15px;
  display: inline-block;
  min-width: 115px;
  text-align: center;
}
.pagination {
  display: flex;
  align-items: center;
  margin-top: 30px;
  &__item {
    margin-right: 5px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    color: #334d6e;
    cursor: pointer;
    &.active {
      background-color: #006400;
      color: #fff;
    }
    &:last-child {
      margin-right: 0;
    }
    &.prev {
      font-size: 24px;
    }
    &.next {
      font-size: 24px;
    }
  }
}
.table {
  &__pagination {
    display: flex;
    justify-content: center;
  }

  &__box {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 40px;
  }
  &__title {
    color: #334d6e;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  &__search {
    display: flex;
    align-items: center;
    background-color: #f0f0f0;
    padding: 14px 12px;
    border-radius: 15px;
    min-width: 150px;
    height: 45px;
    input {
      background-color: transparent;
      border: none;
      color: #929faf;
    }
    button {
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 22px;
      color: #334d6e;
    }
  }

  &__dropdown {
    display: flex;
    align-items: center;
    position: relative;
    .title {
      color: #334d6e;
      font-size: 18px;
      font-weight: 600;
      margin-right: 14px;
    }
    .content {
      display: flex;
      justify-content: space-around;
      height: 45px;
      padding: 12px 15px;
      color: rgba(51, 77, 110, 0.5);
      border-radius: 15px;
      background-color: #f0f0f0;
      min-width: 75px;
      cursor: pointer;
      font-weight: 500;
      .bx {
        color: #334d6e;
        font-size: 20px;
        font-weight: 600;
        margin-left: 5px;
      }
    }
  }
}

.dropdown__box {
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 10px;
  position: absolute;
  top: 110%;
  right: 1px;
  min-width: 75px;
  z-index: 999;
  display: none;
  li {
    margin-bottom: 5px;
    cursor: pointer;
    text-align: right;
    padding-right: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
table {
  margin-top: 20px;
  width: 100%;
  thead {
    th {
      text-transform: uppercase;
      color: #006400;
      font-size: 18px;
      font-weight: 600;
      padding: 10px 10px 10px 0;
      cursor: pointer;
    }
  }
  td {
    padding: 10px 10px 10px 0;
  }
  tbody {
    td {
      color: rgba(51, 77, 110, 0.5);
      font-size: 18px;
      font-weight: 500;
    }
  }
  tr {
    border-top: 1px solid rgba(51, 77, 110, 0.5);
  }
  tfoot {
    color: #006400;
    font-weight: 600;
    font-size: 18px;
  }
}

@media (max-width: 576px) {
  .table__box {
    padding: 15px 10px;
    margin-right: 5px;
    margin-left: 5px;
  }
  .table__dropdown .title {
    font-size: 13px;
    margin-right: 5px;
  }
  .table__search input {
    width: 100%;
  }
  .table__search {
    height: 35px;
    min-width: 100px;
    padding: 10px;
    font-size: 14px;
  }
  .table__dropdown .content {
    min-width: 50px;
    font-size: 14px;
    padding: 5px;
    height: 35px;
  }
  .dropdown__box {
    padding: 5px;
    right: 0;
    min-width: 50px;
  }
  .table__search button {
    font-size: 14px;
  }
  .table__dropdown .content .bx {
    font-size: 16px;
  }
  table thead th {
    font-size: 14px;
  }
  .table__box {
    margin-bottom: 15px;
  }
  table tbody td {
    font-size: 14px;
  }
  table td {
    padding: 5px;
  }
  .hold__badge {
    padding: 5px;
    font-size: 14px;
    min-width: 75px;
  }
  table tfoot {
    font-size: 14px;
  }
  table thead th {
    padding: 5px;
  }
}
</style>