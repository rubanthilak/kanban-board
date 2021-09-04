<template>
  <div class="topbar-holder">
    <div class="topbar">
      <div class="sub-holder flex">
        <h1 class="date-text">{{ date }}</h1>
        <div class="sub-holder">
          <p class="month-text">{{ month }}</p>
          <p class="year-text">{{ year }}</p>
        </div>
      </div>
      <div class="sub-holder btn-holder">
        <button @click="$emit('addCard')" class="add-btn">Add Card</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  emits: ["addCard"],
  data() {
    return {
      today: new Date(),
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  computed: {
    date() {
      return this.today.getDate();
    },
    month() {
      return this.monthNames[this.today.getMonth()];
    },
    year() {
      return this.today.getFullYear();
    },
  },
};
</script>

<style scoped>
.topbar-holder {
  /* position: fixed; */
  top: 0px;
  margin: 35px;
  width: calc(100vw - 70px);
  background: white;
  z-index: 1;
}
.topbar {
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  width: calc(100% - 50px);
  box-shadow: 0px 3px 15px #00000013;
  padding: 25px 25px;
  background: white;
}
.sub-holder {
  margin: auto 0px;
}
.month-text {
  font-family: font-bold;
  font-weight: bold;
  font-size: 26px;
}
.year-text {
  font-family: font-bold;
  font-size: 22px;
  color: gray;
}
p {
  margin: 0px 15px;
}
h1 {
  margin: 0px;
  font-size: 28px;
  font-family: font-bold;
  border: solid 3px black;
  border-radius: 10px;
  padding: 10px 14px;
}
button {
  padding: 10px 20px;
  border: none;
  outline: none;
  border-radius: 5px;
  background: #2674fa;
  color: white;
  font-family: font-bold;
  font-size: 18px;
  vertical-align: text-top;
  cursor: pointer;
}

@media screen and (max-width: 500px) {
  .topbar {
    flex-direction: column;
  }

  .btn-holder {
    margin-top: 10px;
  }
}
</style>