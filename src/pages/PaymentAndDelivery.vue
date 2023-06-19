<template>
  <banners
    :bannerTitle="'ДОСТАВКА И ОПЛАТА'"
    :image="'https://www.bookcity.kz/upload/Sh/imageCache/399/328/a5d85c03824a5644bca095e15d756150.jpg'"
  />
  <div class="payment-delivery">
    <div class="infocards">
      <div class="infocard">
        <div class="infocard__title car">ДОСТАВКА</div>
        <div class="infocard__items">
          <div class="infocard__item">
            <h3 class="infocard__item-title">Доставка (только г. Алматы)</h3>
            <div class="infocard__item-inner">
              <div class="infocard__item-inner-text">
                <span class="bold">Заказы доставляются: с Пн по Пт</span> с
                10:00 до 18:00
              </div>
              <div class="infocard__item-inner-text">
                <span class="bold">Доставка по Алматы:</span> в течение 3-х
                рабочих дней
              </div>
              <div class="infocard__item-inner-text">
                Перед выездом курьер свяжется с Вами по контактному телефону,
                чтобы уточнить время и детали доставки.
              </div>
            </div>
          </div>
          <div class="infocard__item">
            <h3 class="infocard__item-title">Стоимость доставки</h3>
            <div class="infocard__item-inner">
              <div class="infocard__item-inner-text">
                Стоимость доставки: <span class="bold">500 тг.</span>
              </div>
              <div class="infocard__item-inner-text">
                При заказе на сумму от
                <span class="bold">1000 тг.</span> доставка производится
                бесплатно
              </div>
            </div>
          </div>
        </div>
        <div class="extra-info">
          Для получения оплаченного заказа достаточно предъявить курьеру любой
          документ, удостоверяющий Вашу личность. Мы гарантируем
          конфиденциальность Ваших персональных данных”.
        </div>
        <div class="infocard">
          <div class="infocard__title coins">ОПЛАТА</div>
          <div class="infocard__items">
            <div class="infocard__item purse-bg">
              <h3 class="infocard__item-title">KASPI QR</h3>
              <div class="infocard__item-inner">
                <div class="infocard__item-inner-text">
                  При доставке курьером.
                </div>
                <div class="infocard__item-inner-text">
                  Чек высылается на e-mail после оплаты товара.
                </div>
              </div>
            </div>
            <div class="infocard__item">
              <h3 class="infocard__item-title">
                Платёжной картой онлайн (Processing.kz)
              </h3>
              <div class="infocard__item-inner">
                <div class="infocard__item-inner-text">
                  Карты Visa, Visa Electron, MasterCard, Maestro<br />
                  предоплата при оформлении заказа через сайт.
                </div>
                <div class="infocard__item-inner-text">
                  Подтверждение об оплате высылается на e-mail после оплаты
                  товара.
                </div>
                <div class="infocard__item-inner-text">
                  <img
                    src="../assets/delivery/visa.png"
                    class="payment"
                    alt="visa"
                  />
                  <img
                    class="payment"
                    src="../assets/delivery/mastercard.png"
                    alt="mastercard"
                  />
                  <img
                    class="payment"
                    src="../assets/delivery/maestro.png"
                    alt="maestro"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="infocard">
        <div class="infocard__title notebook">ПРАВИЛА ВОЗВРАТА И ОБМЕНА</div>
        <div class="infocard__items">
          <div class="infocard__item">
            <h3 class="infocard__item-title">Обратите внимание</h3>
            <div class="infocard__item-inner">
              <div class="infocard__item-inner-text">
                До момента получения заказа Вы можете отказаться от товара в
                любое время.
              </div>
              <div class="infocard__item-inner-text">
                <span>Возврат товаров после доставки:</span> Возврат товара Вы
                сможете осуществить в течение 14 дней с момента получения заказа
                согласно Гражданскому кодексу РК (Особенная часть), статья
                <span>454</span>.
              </div>
              <div class="infocard__item-inner-text">
                Возврат товара производится в магазине «Книжный Город» на
                основании заявления определенной формы, которое необходимо
                заполнить в магазине компании.
              </div>
              <div class="infocard__item-inner-text">
                При себе Вам необходимо иметь документ, удостоверяющий личность.
              </div>
            </div>
          </div>
          <div class="infocard__item">
            <h3 class="infocard__item-title">
              Для возврата товара необходимо сохранить
            </h3>
            <div class="infocard__item-inner">
              <div class="infocard__item-inner-text flex">
                <img
                  src="../assets/icons/number-one.png"
                  class="number-image"
                />
                <div>Его товарный вид</div>
              </div>
              <div class="infocard__item-inner-text flex">
                <img
                  src="../assets/icons/number-two.png"
                  class="number-image"
                />
                <div>Потребительские свойства</div>
              </div>
              <div class="infocard__item-inner-text flex">
                <img
                  src="../assets/icons/number-three.png"
                  class="number-image"
                />
                <div>
                  Документ, подтверждающий факт и условия покупки указанного
                  товара (фискальный чек)
                </div>
              </div>
              <div class="infocard__item-inner-text note">
                <b>Важно!</b> При себе иметь документ, удостоверяющий личность.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="extra">
      <img class="extra-image" src="../assets/delivery/give-back.png" />
      <div class="extra-text">
        <b>Возврат денежных средств</b> <br />
        Возврат денежных средств производится аналогично способу расчета
        (возврат безналичным расчетом или наличным). Возврат денежных средств за
        товар, приобретенный по безналичному расчету, будет произведен в течение
        10 дней с момента возврата и Вашего письменного заявления.
      </div>
    </div>
  </div>
</template>

<script>
import Banners from "../components/Banners.vue";

export default {
  components: {
    Banners,
  },
};
</script>

<style scoped>
.extra-text {
  font-weight: 400;
  font-size: 16px;
}

.extra {
  display: flex;
  background-color: #f7f8f9;
  padding: 30px;
  align-items: center;
  column-gap: 30px;
  margin-top: 50px;
  margin-bottom: 120px;
}
.payment-delivery {
  margin: 0 auto;
}

.payment:not(:first-child) {
  margin-left: 20px;
}

.note {
  margin-top: 80px;
}

.flex {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}

.number-image {
  margin-right: 30px;
}

.car::before {
  content: "";
  padding-bottom: 20px;
  display: block;
  background-repeat: no-repeat;
  background-position: top center;
  width: 40px;
  margin: 0 auto;
  height: 40px;
  background-image: url("../assets/icons/delivery.svg");
}

.notebook::before {
  content: "";
  padding-bottom: 30px;
  display: block;
  background-repeat: no-repeat;
  background-position: top center;
  width: 50px;
  margin: 0 auto;
  height: 40px;
  background-image: url("../assets/delivery/notebook.svg");
}

.coins::before {
  content: "";
  padding-bottom: 20px;
  display: block;
  background-repeat: no-repeat;
  background-position: top center;
  width: 40px;
  margin: 0 auto;
  height: 40px;
  background-image: url("../assets/delivery/coins.svg");
}
.infocards {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  row-gap: 60px;
}

.purse-bg {
  background-image: url("../assets/delivery/purse.jpg");
  background-repeat: no-repeat;
  background-position: top right;
}

.infocard__title {
  font-weight: 500;
  font-size: 23px;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 5px;
  font-family: "Noto Serif", sans-serif;
}
.infocard__items {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.infocard__item {
  width: 568px;
  min-height: 272px;
  border: 1px solid #cfd3d5;
}

.infocard__item-inner-text {
  line-height: 30px;
  font-size: 16px;
}

.bold {
  font-weight: 700;
  font-size: 17px;
}

.infocard__item-title {
  padding: 15px 30px;
  font-weight: 700;
  background-color: #f7f8f9;
}
.infocard__item-inner {
  padding: 30px;
}

.extra-info {
  font-size: 13px;
  margin: 20px;
}

@media (max-width: 1440px) {
  .extra-text {
    font-size: 14px;
  }

  .extra {
    padding: 25px;
  }
  .payment:not(:first-child) {
    margin-left: 15px;
  }

  .note {
    margin-top: 70px;
  }

  .flex {
    margin-bottom: 20px;
  }

  .number-image {
    margin-right: 25px;
  }

  .car::before {
    content: "";
    padding-bottom: 15px;
  }

  .notebook::before {
    content: "";
    padding-bottom: 25px;
  }

  .coins::before {
    content: "";
    padding-bottom: 15px;
  }
  .infocards {
    row-gap: 50px;
  }

  .infocard__title {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 15px;
  }
  .infocard__item-inner-text {
    font-size: 14px;
  }
  .bold {
    font-size: 15px;
  }

  .infocard__item-title {
    padding: 10px 25px;
  }
  .infocard__item-inner {
    padding: 25px;
  }

  .extra-info {
    font-size: 11px;
    margin: 15px;
  }
}

@media (max-width: 1024px) {
  .infocard__items {
    justify-content: center;
    column-gap: 40px;
  }
  .infocard__item {
    width: 45%;
  }

  .extra-text {
    font-size: 14px;
  }
  .extra {
    padding: 20px;
  }
  .payment:not(:first-child) {
    margin-left: 10px;
  }

  .note {
    margin-top: 60px;
  }

  .flex {
    margin-bottom: 10px;
  }

  .number-image {
    margin-right: 20px;
  }

  .car::before {
    content: "";
    padding-bottom: 10px;
  }

  .notebook::before {
    content: "";
    padding-bottom: 20px;
  }

  .coins::before {
    content: "";
    padding-bottom: 10px;
  }
  .infocard__title {
    font-size: 18px;
    margin-bottom: 10px;
  }
  .infocard__item-inner-text {
    font-size: 12px;
  }
  .bold {
    font-size: 12px;
  }

  .infocard__item-title {
    padding: 5px 20px;
  }
  .infocard__item-inner {
    padding: 20px;
  }

  .extra-info {
    font-size: 11px;
    margin: 10px;
  }
}

@media (max-width: 425px) {
  .infocard__items {
    justify-content: center;
    row-gap: 40px;
    flex-direction: column;
  }
  .infocard__item {
    width: 95%;
  }

  .extra-text {
    font-size: 12px;
  }
  .extra {
    padding: 15px;
  }
  .payment:not(:first-child) {
    margin-left: 5px;
  }

  .note {
    margin-top: 60px;
  }

  .flex {
    margin-bottom: 5px;
  }

  .number-image {
    margin-right: 15px;
  }

  .car::before {
    content: "";
    padding-bottom: 5px;
  }

  .notebook::before {
    content: "";
    padding-bottom: 15px;
  }

  .coins::before {
    content: "";
    padding-bottom: 5px;
  }
  .infocard__title {
    font-size: 16px;
    margin-bottom: 5px;
  }
  .infocard__item-inner-text {
    font-size: 12px;
  }
  .bold {
    font-size: 12px;
  }

  .infocard__item-title {
    padding: 5px 15px;
  }
  .infocard__item-inner {
    padding: 15px;
  }

  .extra-info {
    font-size: 13px;
    margin: 10px;
  }
}

@media (max-width: 350px) {
  .extra {
    padding: 10px;
  }
  .payment:not(:first-child) {
    margin-left: 5px;
  }

  .note {
    margin-top: 50px;
  }

  .number-image {
    margin-right: 5px;
  }

  .notebook::before {
    content: "";
    padding-bottom: 5px;
  }

  .infocard__title {
    font-size: 14px;
    margin-bottom: 5px;
  }
  .infocard__item-inner-text {
    font-size: 12px;
  }
  .bold {
    font-size: 12px;
  }

  .infocard__item-title {
    padding: 5px 5px;
  }
  .infocard__item-inner {
    padding: 5px;
  }

  .extra-info {
    font-size: 13px;
    margin: 5px;
  }
}
</style>
