import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [gameState, setGameState] = useState("menu"); // 'menu', 'loading', 'bedroom', 'kitchen', 'phone'
  const [showText, setShowText] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Typing effect for game text
  const typeText = (text: string) => {
    setIsTyping(true);
    setCurrentText("");
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setCurrentText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, 50);
  };

  // Start game sequence
  const startGame = () => {
    setGameState("loading");
    setTimeout(() => {
      setShowText(true);
      typeText(
        "Сплю в своей комнате, сейчас примерно 2 часа ночи. От неожиданности я просыпаюсь от странных звуков на кухне.",
      );
      setTimeout(() => {
        setGameState("bedroom");
      }, 8000);
    }, 3000);
  };

  // Exit game
  const exitGame = () => {
    if (confirm("Вы уверены, что хотите выйти?")) {
      window.close();
    }
  };

  // Main menu
  if (gameState === "menu") {
    return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Atmospheric background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900 opacity-80"></div>

        {/* Horror house image */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="/img/aa208661-12b7-451a-9f37-abb7e876815e.jpg"
            alt="Horror House"
            className="w-full h-full object-cover animate-pulse"
          />
        </div>

        {/* Glitch effect overlay */}
        <div className="absolute inset-0 bg-black opacity-20 animate-pulse"></div>

        {/* Main content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <Card className="bg-black/80 border-red-600 border-2 p-8 max-w-md w-full backdrop-blur-sm">
            <div className="text-center space-y-6">
              {/* Title */}
              <h1 className="text-4xl font-bold text-red-500 mb-2 animate-pulse">
                БУДЬ ВНИМАТЕЛЕН
              </h1>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed">
                Персонаж идёт по улице и замечает странного человека...
              </p>

              {/* Disclaimer */}
              <div className="bg-red-900/30 border border-red-500 rounded p-4">
                <p className="text-red-400 font-bold text-sm uppercase tracking-wide">
                  ⚠️ ДАННЫЙ МАТЕРИАЛ ПОДХОДИТ НЕ ВСЕМ! <br />
                  ПОЖАЛУЙСТА, ЕСЛИ ВЫ СЛАБОНЕРВНЫЙ, НЕ ИГРАЙТЕ В ЭТУ ИГРУ!
                </p>
              </div>

              {/* Menu buttons */}
              <div className="space-y-4">
                <Button
                  onClick={startGame}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 text-lg transition-all duration-300 hover:scale-105"
                >
                  <Icon name="Play" className="mr-2" />
                  НАЧАТЬ
                </Button>

                <Button
                  onClick={() => alert("Настройки находятся в разработке!")}
                  variant="outline"
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 font-bold py-3 text-lg transition-all duration-300"
                >
                  <Icon name="Settings" className="mr-2" />
                  НАСТРОЙКИ
                </Button>

                <Button
                  onClick={exitGame}
                  variant="destructive"
                  className="w-full bg-gray-800 hover:bg-gray-700 text-red-400 font-bold py-3 text-lg transition-all duration-300"
                >
                  <Icon name="X" className="mr-2" />
                  ВЫХОД С САЙТА
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Ambient effects */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-transparent to-red-600 animate-pulse"></div>
      </div>
    );
  }

  // Loading screen
  if (gameState === "loading") {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          {showText && (
            <div className="max-w-2xl mx-auto p-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                {currentText}
                {isTyping && <span className="animate-pulse">_</span>}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Bedroom scene
  if (gameState === "bedroom") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white relative">
        {/* Room background */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* 3D Room simulation */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="w-full max-w-6xl mx-auto">
            {/* Room visualization */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 mb-8 border-2 border-gray-700">
              <div className="grid grid-cols-3 gap-4 h-96">
                {/* Bed */}
                <div className="col-span-2 bg-blue-800 rounded-lg flex items-center justify-center border-2 border-blue-600">
                  <div className="text-center">
                    <Icon
                      name="Bed"
                      size={48}
                      className="text-blue-300 mx-auto mb-2"
                    />
                    <p className="text-blue-300 font-bold">КРОВАТЬ</p>
                    <p className="text-sm text-blue-400">Вы лежите здесь</p>
                  </div>
                </div>

                {/* Desk with lamp */}
                <div className="bg-yellow-800 rounded-lg flex items-center justify-center border-2 border-yellow-600">
                  <div className="text-center">
                    <Icon
                      name="Lamp"
                      size={32}
                      className="text-yellow-300 mx-auto mb-2 animate-pulse"
                    />
                    <p className="text-yellow-300 font-bold">СТОЛ</p>
                    <p className="text-sm text-yellow-400">Лампа скрипит</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="text-center space-y-4">
              <p className="text-xl text-gray-300 mb-6">
                Вы проснулись от странных звуков. Что будете делать?
              </p>

              <div className="flex justify-center space-x-4">
                <Button
                  onClick={() => setGameState("kitchen")}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 text-lg transition-all duration-300 hover:scale-105"
                >
                  <Icon name="ChefHat" className="mr-2" />
                  ПОЙТИ НА КУХНЮ
                </Button>

                <Button
                  onClick={() => setGameState("phone")}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 text-lg transition-all duration-300 hover:scale-105"
                >
                  <Icon name="Smartphone" className="mr-2" />
                  ПОСМОТРЕТЬ В ТЕЛЕФОНЕ
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Back to menu */}
        <div className="absolute top-4 left-4">
          <Button
            onClick={() => setGameState("menu")}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            <Icon name="ArrowLeft" className="mr-2" />
            МЕНЮ
          </Button>
        </div>
      </div>
    );
  }

  // Kitchen scene
  if (gameState === "kitchen") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-black text-white relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="w-full max-w-6xl mx-auto">
            {/* Kitchen visualization */}
            <div className="relative bg-gradient-to-br from-gray-800 to-red-900 rounded-lg p-8 mb-8 border-2 border-red-700">
              <div className="grid grid-cols-4 gap-4 h-96">
                {/* Kitchen furniture */}
                <div className="bg-gray-700 rounded-lg flex items-center justify-center border-2 border-gray-600">
                  <div className="text-center">
                    <Icon
                      name="Refrigerator"
                      size={32}
                      className="text-gray-300 mx-auto mb-2"
                    />
                    <p className="text-gray-300 font-bold">ХОЛОДИЛЬНИК</p>
                  </div>
                </div>

                <div className="bg-brown-700 rounded-lg flex items-center justify-center border-2 border-brown-600">
                  <div className="text-center">
                    <Icon
                      name="ChefHat"
                      size={32}
                      className="text-brown-300 mx-auto mb-2"
                    />
                    <p className="text-brown-300 font-bold">ПЛИТА</p>
                  </div>
                </div>

                <div className="bg-gray-600 rounded-lg flex items-center justify-center border-2 border-gray-500">
                  <div className="text-center">
                    <Icon
                      name="Utensils"
                      size={32}
                      className="text-gray-300 mx-auto mb-2"
                    />
                    <p className="text-gray-300 font-bold">МОЙКА</p>
                  </div>
                </div>

                <div className="bg-yellow-700 rounded-lg flex items-center justify-center border-2 border-yellow-600">
                  <div className="text-center">
                    <Icon
                      name="Lightbulb"
                      size={32}
                      className="text-yellow-300 mx-auto mb-2 animate-pulse"
                    />
                    <p className="text-yellow-300 font-bold">СВЕТ</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <p className="text-xl text-gray-300 mb-4">
                Вы прошли через комнату брата (он спит) и попали на кухню.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                Вы осматриваете всю мебель, но ничего странного не находите.
              </p>

              <Button
                onClick={() => {
                  alert(
                    "Вы возвращаетесь в комнату и ложитесь спать. Игра завершена!",
                  );
                  setGameState("menu");
                }}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 text-lg transition-all duration-300 hover:scale-105"
              >
                <Icon name="Bed" className="mr-2" />
                ВЕРНУТЬСЯ В КОМНАТУ И ЛЕЧЬ СПАТЬ
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute top-4 left-4">
          <Button
            onClick={() => setGameState("bedroom")}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            <Icon name="ArrowLeft" className="mr-2" />
            НАЗАД
          </Button>
        </div>
      </div>
    );
  }

  // Phone scene
  if (gameState === "phone") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white relative">
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="w-full max-w-2xl mx-auto">
            {/* Phone interface */}
            <div className="bg-gray-900 rounded-3xl p-8 border-4 border-gray-700 shadow-2xl">
              <div className="bg-black rounded-2xl p-6 mb-6">
                <div className="text-center mb-6">
                  <Icon
                    name="Smartphone"
                    size={64}
                    className="text-blue-400 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-blue-400">ТЕЛЕФОН</h3>
                </div>

                {/* Messages */}
                <div className="space-y-4">
                  <div className="bg-red-900/50 rounded-lg p-4 border border-red-600">
                    <p className="text-red-400 font-bold mb-2">
                      📱 УВЕДОМЛЕНИЕ
                    </p>
                    <p className="text-red-300">
                      Необходимо заплатить за квартиру до конца месяца!
                    </p>
                  </div>

                  <div className="bg-yellow-900/50 rounded-lg p-4 border border-yellow-600">
                    <p className="text-yellow-400 font-bold mb-2">💰 СЧЁТ</p>
                    <p className="text-yellow-300">
                      Задолженность: 15,000 рублей
                    </p>
                  </div>

                  <div className="bg-blue-900/50 rounded-lg p-4 border border-blue-600">
                    <p className="text-blue-400 font-bold mb-2">
                      ℹ️ НАПОМИНАНИЕ
                    </p>
                    <p className="text-blue-300">
                      Не забудьте оплатить коммунальные услуги
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <p className="text-gray-300 mb-6">
                  После просмотра сообщений вы решаете лечь спать.
                </p>

                <Button
                  onClick={() => {
                    alert(
                      "Вы кладёте телефон и ложитесь спать. Игра завершена!",
                    );
                    setGameState("menu");
                  }}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 text-lg transition-all duration-300 hover:scale-105"
                >
                  <Icon name="Bed" className="mr-2" />
                  ЛЕЧЬ СПАТЬ
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-4 left-4">
          <Button
            onClick={() => setGameState("bedroom")}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            <Icon name="ArrowLeft" className="mr-2" />
            НАЗАД
          </Button>
        </div>
      </div>
    );
  }

  return null;
};

export default Index;
