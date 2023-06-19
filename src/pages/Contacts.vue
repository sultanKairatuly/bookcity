<template>
  <banners
    :bannerTitle="'КОНТАКТЫ'"
    :image="'https://www.bookcity.kz/upload/Sh/imageCache/fa7/34e/3d5d0a0eb1c98f352a1c33e783fbe3c9.jpg'"
  />
  <div class="contacts">
    <div class="contacts__item">
      <div class="contacts__item-title margin">СВЯЖИТЕСЬ С НАМИ</div>
      <div class="contacts__item-text phone"><b>Телефоны</b>:</div>
      <div class="contacts__item-text">+7(727)344-0-344</div>
      <div class="contacts__item-text">
        Режим работы Call-центра: Пн-Пт (10:00-21:00)
      </div>
      <div class="contacts__item-text"><b>Email:</b> info@bookcity.kz</div>
      <div class="contacts__item-text"><b>Адрес магазина:</b></div>
      <div class="contacts__item-text">
        ул. Розыбакиева, 281, выше ТРК "Mega center Alma-Ata"
      </div>
      <div class="contacts__item-text">
        <b>Время доставки:</b> Пн-Пт (10:00-18:00)
      </div>
    </div>
    <div class="contacts__item">
      <div class="contacts__item-title">НАПИШИТЕ НАМ</div>
      <br />
      <span class="gray">Eсли есть вопрос или пожелания</span>

      <form class="form">
        <label>
          <div class="label__text">Имя</div>
          <input
            type="text"
            class="label__input marginRight"
            v-model="userName"
            @mouseenter="nameInputHovered = true"
            @mouseleave="nameInputHovered = false"
            :class="{
              focused: nameInputHovered,
            }"
          />
        </label>
        <label>
          <div class="label__text">Телефон</div>
          <input
            type="text"
            class="label__input"
            v-model="userPhone"
            @mouseenter="phoneInputHovered = true"
            @mouseleave="phoneInputHovered = false"
            :class="{
              focused: phoneInputHovered,
            }"
          />
        </label>
        <label
          ><div class="label__text">Сообщение</div>
          <textarea
            type="text"
            class="label__textarea"
            v-model="userMessage"
            @mouseenter="messageInputHovered = true"
            @mouseleave="messageInputHovered = false"
            :class="{
              focused: messageInputHovered,
            }"
          ></textarea>
        </label>
        <button class="send-btn" @click.prevent>Отправить</button>
      </form>
    </div>
  </div>
  <div class="line"></div>
  <advantages :advantagesList="advantagesList" />
</template>

<script>
import Banners from "../components/Banners.vue";
import Advantages from "../components/Advantages.vue";

export default {
  name: "ContactsComponent",
  components: {
    Banners,
    Advantages,
  },
  data() {
    return {
      userName: "",
      userPhone: "",
      userMessage: "",
      nameInputHovered: false,
      phoneInputHovered: false,
      messageInputHovered: false,
      advantagesList: [
        {
          title: "САМЫЙ КРУПНЫЙ МАГАЗИН КНИГ В ЦЕНТРАЛЬНОЙ АЗИИ",
          image: "assets/advantage/planet.png",
        },
        {
          title: "КУРЬЕРСКАЯ ДОСТАВКА ДО ДВЕРИ ВАШЕГО ДОМА",
          image: "assets/advantage/car.png",
        },
        {
          title: "В МАГАЗИНЕ БЕСПЛАТНАЯ УПАКОВКА КНИГ",
          image: "assets/advantage/icon-gift.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.contacts {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.line {
  border-bottom: 1px solid #cfd3d5;
  height: 1px;
}

.send-btn {
  height: 44px;
  width: 220px;
  text-align: center;
  text-transform: uppercase;
  background-color: #a62749;
  color: #fff;
  border: none;
  transition: 0.2s ease-in;
  transform: translateY(-15px);
  cursor: pointer;
}

.send-btn:hover {
  background-color: #7a1d36;
}

.marginRight {
  margin-right: 30px;
}

.margin {
  margin-bottom: 50px;
}
.contacts__item {
  padding: 30px;
  width: 570px;
}

.phone::before {
  content: "";
  display: block;
  padding-bottom: 20px;
  background-image: url("../assets/icons/phone.svg");
  background-position: top center;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
}
.contacts__item-title {
  font-weight: 700;
  font-size: 19px;
  letter-spacing: 5px;
  font-family: "Noto Serif", sans-serif;
}
.contacts__item-text {
  margin-bottom: 30px;
  font-size: 15px;
}
.gray {
  font-size: 12px;
  margin-top: 0;
}

.form {
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
}
.label__text {
  margin-bottom: 5px;
  font-size: 14px;
}

.label__text::before {
  content: "*";
  margin-right: 5px;
  display: inline-block;
  color: #f26993;
}
.label__input {
  padding: 9px 15px;
  border: 1px solid #cfd3d5;
  height: 44px;
  width: 240px;
  outline: none;
  transition: 0.2s ease;
}
.label__textarea {
  resize: none;
  padding: 9px 15px;
  height: 120px;
  outline: none;
  transition: 0.2s ease;
  width: 510px;
  border: 1px solid #cfd3d5;
}

.focused {
  border: 1px solid #000;
}

@media (max-width: 1024px) {
  .contacts {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    column-gap: 50px;
  }

  .send-btn {
    width: 200px;
  }

  .marginRight {
    margin-right: 20px;
  }

  .margin {
    margin-bottom: 40px;
  }
  .contacts__item {
    padding: 10px;
    width: 45%;
  }

  .phone::before {
    content: "";
    padding-bottom: 15px;
    width: 24px;
    height: 24px;
  }
  .contacts__item-title {
    font-size: 16px;
    letter-spacing: 3px;
  }
  .contacts__item-text {
    margin-bottom: 20px;
    font-size: 13px;
  }
  .label__text {
    margin-bottom: 5px;
    font-size: 12px;
  }

  .label__input {
    padding: 4px 10px;
    height: 44px;
    width: 220px;
  }
  .label__textarea {
    padding: 4px 10px;
    width: 300px;
  }
}

@media (max-width: 480px) {
  .contacts {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    column-gap: 50px;
    flex-direction: column;
  }

  .send-btn {
    width: 200px;
  }

  .marginRight {
    margin-right: 20px;
  }

  .margin {
    margin-bottom: 40px;
  }

  .contacts__item {
    padding: 10px;
    width: 100%;
  }

  .contacts__item-title {
    font-size: 16px;
    letter-spacing: 3px;
    width: 100%;
    text-align: center;
  }
  .contacts__item-text {
    margin-bottom: 20px;
    font-size: 15px;
  }
  .label__text {
    margin-bottom: 5px;
    font-size: 15px;
  }
}

@media (max-width: 320px) {
  .send-btn {
    width: 180px;
  }

  .marginRight {
    margin-right: 10px;
  }

  .margin {
    margin-bottom: 20px;
  }

  .contacts__item {
    padding: 5px;
  }

  .contacts__item-title {
    font-size: 14px;
  }
  .contacts__item-text {
    font-size: 13px;
  }
  .label__text {
    font-size: 13px;
  }
}
</style>
