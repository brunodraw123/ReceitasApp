import PushNotification from "react-native-push-notification"

class NotificationManager {

    setNavegador(novoNavegador) {
        navegador = novoNavegador
    }

    configure = () => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log("[NotificationManager] onRegister token:", token);
            },
            onNotification: function (notification) {
                console.log("[NotificationManager] onNotification:", notification);
                navegador.navigate("Redirect")

            },
        })
    }

    buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
        return {
            id: id,
            autoCancel: true,
            largeIcon: options.largeIcon || "ic_launcher",
            smallIcon: options.smallIcon || "ic_launcher",
            bigText: message || '',
            subText: title || '',
            vibrate: options.vibrate || false,
            vibration: options.vibration || 300,
            priority: options.priority || "high",
            importance: options.importance || "high",
            data: data
        }
    }

    showNotificationSchedule = () => {
        PushNotification.localNotificationSchedule({
            id: 10,
            title: "Mande para nós sua ideia de receita!",
            message: "A interação com nossos usuários é fundamental para a gente :)", // (required)
            date: new Date(Date.now() + 5 * 60 * 1000), // in 60 secs

            repeatTime: + 5 * 65 * 1000,
            repeatType: "time",
            channelId: 'gesto-id'
        });

        PushNotification.localNotificationSchedule({
            id: 11,
            title: "Tem alguma sugestão de melhoria?",
            message: "Nos conte, queremos saber!", // (required)
            date: new Date(Date.now() + 5 * 60 * 1000), // in 60 secs

            repeatTime: + 5 * 65 * 1000,
            repeatType: "time",
            channelId: 'gesto-id'
        });

        PushNotification.localNotificationSchedule({
            id: 12,
            title: "Que tal dar uma espiadinha nos destaques da semana? ",
            message: "Confira nossas melhores receitas.", // (required)
            date: new Date(Date.now() + 5 * 60 * 1000), // in 60 secs

            /* Android Only Properties */
            repeatTime: + 5 * 70 * 1000, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
            repeatType: "time",
            channelId: 'gesto-id'
        });

    }

    showNotification = (id, title, message, data = {}, options = {}) => {
        PushNotification.localNotification({
            ...this.buildAndroidNotification(id, title, message, data, options),
            channelId: 'gesto-id',
            title: title || "",
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || 'default',
            userInteraction: false
        })
    }

    cancelAllLocalNotification = () => {
        PushNotification.cancelAllLocalNotifications();
    }

    createChannel = () => {
        PushNotification.createChannel(
            {
                channelId: "gesto-id", // (required)
                channelName: "Notificação pro gesto", // (required)
                channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
            },

            (created) => console.log(`createChannel returned '${created}'`)
        );
    }

}

export const Notification = new NotificationManager();
