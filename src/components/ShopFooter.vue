<template>
  <div class="container">
    <div class="section">
      <div class="footer-top-row">
        <div class="footer-top-row__item">
          <div class="footer-top-row-item__text">О компании</div>
          <div class="footer-top-row-item__text">Доставка и оплата</div>
          <div class="footer-top-row-item__text">Контакты</div>
          <div class="footer-top-row-item__text">Карта сайта</div>
        </div>
        <div class="footer-top-row__item">
          <div class="footer-top-row-item__text">Новинки</div>
          <div class="footer-top-row-item__text">Подарочные карты</div>
        </div>
        <div class="footer-top-row__item">
          <div class="footer-top-row-item__text">Личный кабинет</div>
          <div class="footer-top-row-item__text">Избранное</div>
        </div>
        <div class="footer-top-row__item">
          <div class="footer-top-row-item__text">Мы в соцсетях</div>
          <div class="footer-social-media">
            <img
              class="footer-social-media__item"
              src="../assets/footer/vk.png"
            />
            <img
              class="footer-social-media__item"
              src="../assets/footer/facebook.png"
            />
            <img
              class="footer-social-media__item"
              src="../assets/footer/instagram.png"
            />
          </div>
          <div class="footer-top-row-item__text">
            Подписывайся на нашу рассылку
          </div>
          <div class="footer-input">
            <input class="input" type="text" placeholder="Email" />
            <div class="send-button"></div>
          </div>
        </div>
      </div>
      <div class="footer-bottom-row">
        <div class="footer-bottom-row__item">
          <div class="footer-top-row-item__text">
            ©2017 Участник партнерской программы OZON.RU
          </div>
        </div>
        <div class="footer-bottom-row__item">
          <div class="dev">
            <img class="dev-icon" src="../assets/footer/dev-one.png" />
            <div class="dev-text">Разработка магазина Новый сайт</div>
          </div>
          <div class="dev">
            <img class="dev-icon" src="../assets/footer/dev-two.png" />
            <div class="dev-text">Created by Sense Production</div>
          </div>
        </div>
        <div class="footer-bottom-row__item">
          <img
            class="payment-type visa"
            src="../assets/footer/payment-visa.svg"
          />
          <img
            class="payment-type maestro"
            src="../assets/footer/payment-maestro.svg"
          />
          <img
            class="payment-type mastercard"
            src="../assets/footer/payment-mastercard.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopFooter",
};
</script>

<style scoped>
.footer-input {
  display: flex;
  margin-left: 10px;
}
.container {
  background-color: #f7f8f9;
  padding: 60px 0;
  border-top: 1px solid #cfd3d5;
  margin-bottom: 0;
}
.section {
  margin: 0 auto;
  row-gap: 30px;
  display: flex;
  flex-direction: column;
}
.footer-top-row {
  justify-content: space-between;
  display: flex;
}
.footer-top-row__item {
  display: flex;
  flex-direction: column;
}

.footer-top-row-item__text {
  font-size: 13px;
  margin: 10px;
  cursor: pointer;
  color: #121319;
  transition: 0.1s ease-in-out;
}
.footer-top-row-item__text {
  font-size: 13px;
  margin: 10px;
  cursor: pointer;
  color: #121319;
  transition: 0.1s ease-in-out;
}

.footer-top-row-item__text:hover {
  color: #a5294b;
}

.input {
  padding: 9px 15px;
  width: 227px;
  height: 44px;
  outline: none;
  border: 1px solid #cfd3d5;
  transition: 0.3s ease-in-out;
}
.send-button {
  width: 44px;
  height: 44px;
  background-color: #e6e6e6;
  cursor: pointer;
  border: none;
  outline: none;
  background-image: url("../assets/footer/send-icon.png");
  background-position: center;
  background-repeat: no-repeat;
}
.footer-bottom-row {
  justify-content: space-between;
  display: flex;
}
.footer-bottom-row__item {
  display: flex;
  column-gap: 20px;
  align-items: center;
}
.dev {
  display: flex;
  align-items: center;
  column-gap: 15px;
}
.dev-text {
  width: 115px;
  font-size: 14px;
}
.payment-type {
  width: 115px;
  height: 22px;
  object-fit: contain;
}

.visa {
  width: 41px;
  height: 12px;
  margin: 10px 15px;
}

.mastercard {
  width: 91px;
  height: 13px;
  margin: 10px 15px;
}

.maestro {
  width: 64px;
  margin: 10px 15px;
  height: 12px;
}

@media (max-width: 1440px) {
  .container {
    padding: 45px 0;
  }
  .section {
    row-gap: 20px;
  }
  .footer-top-row-item__text {
    font-size: 11px;
    margin: 5px;
  }
  .footer-top-row-item__text {
    font-size: 11px;
    margin: 5px;
  }

  .input {
    padding: 4px 10px;
    width: 200px;
    height: 35px;
  }
  .send-button {
    width: 35px;
    height: 35px;
  }
  .dev {
    column-gap: 10px;
  }
  .dev-text {
    width: 90px;
    font-size: 12px;
  }
  .payment-type {
    width: 90px;
    height: 20px;
    object-fit: contain;
  }

  .visa {
    width: 35px;
    height: 12px;
    margin: 5px 10px;
  }

  .mastercard {
    width: 70px;
    margin: 5px 10px;
  }

  .maestro {
    width: 40px;
    margin: 5px 10px;
  }
}

@media (max-width: 1024px) {
  .container {
    padding: 20px 0;
  }
  .section {
    row-gap: 100px;
  }
  .footer-top-row-item__text {
    font-size: 12px;
  }
  .footer-top-row-item__text {
    font-size: 12px;
  }

  .footer-bottom-row__item {
    column-gap: 10px;
  }

  .input {
    padding: 4px 5px;
    width: 170px;
    height: 25px;
  }
  .send-button {
    width: 25px;
    height: 25px;
  }
  .dev {
    column-gap: 5px;
  }
  .dev-text {
    width: 80px;
    font-size: 12px;
  }
  .payment-type {
    width: 80px;
    height: 18px;
  }

  .footer-top-row {
    justify-content: center;
    display: flex;
    column-gap: 60px;
  }

  .footer-bottom-row {
    justify-content: center;
    display: flex;
    column-gap: 40px;
  }

  .visa {
    width: 25px;
    height: 12px;
    margin: 2px 5px;
  }

  .mastercard {
    width: 70px;
    margin: 2px 5px;
  }

  .maestro {
    width: 40px;
    margin: 5px 5px;
  }
}

@media (max-width: 770px) {
  .container {
    padding: 10px 0;
  }
  .section {
    row-gap: 100px;
  }
  .footer-top-row-item__text {
    font-size: 12px;
  }
  .footer-top-row-item__text {
    font-size: 12px;
  }

  .footer-bottom-row__item {
    column-gap: 25px;
  }

  .footer-bottom-row__item:last-child {
    column-gap: 5px;
  }

  .input {
    padding: 4px 5px;
    width: 120px;
    height: 25px;
  }
  .send-button {
    width: 20px;
    height: 25px;
  }
  .dev {
    column-gap: 5px;
  }
  .dev-text {
    width: 70px;
    font-size: 12px;
  }
  .payment-type {
    width: 70px;
    height: 18px;
  }

  .footer-top-row {
    justify-content: center;
    display: flex;
    column-gap: 40px;
  }

  .footer-bottom-row__item:first-child {
    width: 150px;
  }

  .footer-bottom-row {
    justify-content: center;
    display: flex;
    column-gap: 30px;
  }

  .visa {
    width: 25px;
    height: 12px;
    margin: 2px 5px;
  }

  .mastercard {
    width: 70px;
    margin: 2px 5px;
  }

  .maestro {
    width: 40px;
    margin: 5px 5px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 5px 0;
  }
  .section {
    row-gap: 70px;
  }
  .footer-top-row-item__text {
    font-size: 14px;
  }
  .footer-top-row-item__text {
    font-size: 14px;
  }

  .footer-bottom-row__item {
    column-gap: 20px;
  }

  .input {
    width: 100px;
  }
  .dev-text {
    width: 70px;
    font-size: 12px;
  }
  .payment-type {
    width: 70px;
    height: 18px;
  }

  .footer-top-row {
    justify-content: center;
    display: flex;
    column-gap: 40px;
  }

  .footer-top-row {
    flex-direction: column;
  }

  .footer-bottom-row {
    flex-direction: column;
    row-gap: 20px;
  }

  .container {
    padding: 30px 10px;
  }

  .footer-bottom-row__item:first-child {
    width: 150px;
  }

  .footer-bottom-row {
    justify-content: center;
    display: flex;
    column-gap: 30px;
  }

  .visa {
    width: 25px;
    height: 12px;
    margin: 2px 5px;
  }

  .mastercard {
    width: 70px;
    margin: 2px 5px;
  }

  .maestro {
    width: 40px;
    margin: 5px 5px;
  }
}
</style>
