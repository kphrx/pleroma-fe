(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{305:function(o,e,t){o.exports=function(){"use strict";return[{locale:"ru",pluralRuleFunction:function(o,e){var t=String(o).split("."),a=t[0],n=!t[1],s=a.slice(-1),i=a.slice(-2);return e?"other":n&&1==s&&11!=i?"one":n&&s>=2&&s<=4&&(i<12||i>14)?"few":n&&0==s||n&&s>=5&&s<=9||n&&i>=11&&i<=14?"many":"other"},fields:{year:{displayName:"год",relative:{0:"в этом году",1:"в следующем году","-1":"в прошлом году"},relativeTime:{future:{one:"через {0} год",few:"через {0} года",many:"через {0} лет",other:"через {0} года"},past:{one:"{0} год назад",few:"{0} года назад",many:"{0} лет назад",other:"{0} года назад"}}},month:{displayName:"месяц",relative:{0:"в этом месяце",1:"в следующем месяце","-1":"в прошлом месяце"},relativeTime:{future:{one:"через {0} месяц",few:"через {0} месяца",many:"через {0} месяцев",other:"через {0} месяца"},past:{one:"{0} месяц назад",few:"{0} месяца назад",many:"{0} месяцев назад",other:"{0} месяца назад"}}},day:{displayName:"день",relative:{0:"сегодня",1:"завтра",2:"послезавтра","-2":"позавчера","-1":"вчера"},relativeTime:{future:{one:"через {0} день",few:"через {0} дня",many:"через {0} дней",other:"через {0} дня"},past:{one:"{0} день назад",few:"{0} дня назад",many:"{0} дней назад",other:"{0} дня назад"}}},hour:{displayName:"час",relative:{0:"в этом часе"},relativeTime:{future:{one:"через {0} час",few:"через {0} часа",many:"через {0} часов",other:"через {0} часа"},past:{one:"{0} час назад",few:"{0} часа назад",many:"{0} часов назад",other:"{0} часа назад"}}},minute:{displayName:"минута",relative:{0:"в эту минуту"},relativeTime:{future:{one:"через {0} минуту",few:"через {0} минуты",many:"через {0} минут",other:"через {0} минуты"},past:{one:"{0} минуту назад",few:"{0} минуты назад",many:"{0} минут назад",other:"{0} минуты назад"}}},second:{displayName:"секунда",relative:{0:"сейчас"},relativeTime:{future:{one:"через {0} секунду",few:"через {0} секунды",many:"через {0} секунд",other:"через {0} секунды"},past:{one:"{0} секунду назад",few:"{0} секунды назад",many:"{0} секунд назад",other:"{0} секунды назад"}}}}},{locale:"ru-BY",parentLocale:"ru"},{locale:"ru-KG",parentLocale:"ru"},{locale:"ru-KZ",parentLocale:"ru"},{locale:"ru-MD",parentLocale:"ru"},{locale:"ru-UA",parentLocale:"ru"}]}()},306:function(o){o.exports={"account.badges.bot":"Бот","account.block":"Блокировать","account.block_domain":"Блокировать все с {domain}","account.blocked":"Заблокирован(а)","account.direct":"Написать @{name}","account.disclaimer_full":"Нижеуказанная информация может не полностью отражать профиль пользователя.","account.domain_blocked":"Домен скрыт","account.edit_profile":"Изменить профиль","account.endorse":"Рекомендовать в профиле","account.follow":"Подписаться","account.followers":"Подписаны","account.followers.empty":"Никто не подписан на этого пользователя.","account.follows":"Подписки","account.follows.empty":"Этот пользователь ни на кого не подписан.","account.follows_you":"Подписан(а) на Вас","account.hide_reblogs":"Скрыть продвижения от @{name}","account.media":"Медиа","account.mention":"Упомянуть","account.moved_to":"Ищите {name} здесь:","account.mute":"Заглушить","account.mute_notifications":"Скрыть уведомления от @{name}","account.muted":"Приглушён","account.posts":"Посты","account.posts_with_replies":"Посты и ответы","account.report":"Пожаловаться","account.requested":"Ожидает подтверждения","account.share":"Поделиться профилем @{name}","account.show_reblogs":"Показывать продвижения от @{name}","account.unblock":"Разблокировать","account.unblock_domain":"Разблокировать {domain}","account.unendorse":"Не рекомендовать в профиле","account.unfollow":"Отписаться","account.unmute":"Снять глушение","account.unmute_notifications":"Показывать уведомления от @{name}","account.view_full_profile":"Показать полный профиль","alert.unexpected.message":"Что-то пошло не так.","alert.unexpected.title":"Ой!","boost_modal.combo":"Нажмите {combo}, чтобы пропустить это в следующий раз","bundle_column_error.body":"Что-то пошло не так при загрузке этого компонента.","bundle_column_error.retry":"Попробовать снова","bundle_column_error.title":"Ошибка сети","bundle_modal_error.close":"Закрыть","bundle_modal_error.message":"Что-то пошло не так при загрузке этого компонента.","bundle_modal_error.retry":"Попробовать снова","column.blocks":"Список блокировки","column.community":"Локальная лента","column.direct":"Личные сообщения","column.domain_blocks":"Скрытые домены","column.favourites":"Понравившееся","column.follow_requests":"Запросы на подписку","column.home":"Главная","column.lists":"Списки","column.mutes":"Список глушения","column.notifications":"Уведомления","column.pins":"Закреплённый пост","column.public":"Глобальная лента","column_back_button.label":"Назад","column_header.hide_settings":"Скрыть настройки","column_header.moveLeft_settings":"Передвинуть колонку влево","column_header.moveRight_settings":"Передвинуть колонку вправо","column_header.pin":"Закрепить","column_header.show_settings":"Показать настройки","column_header.unpin":"Открепить","column_subheading.settings":"Настройки","community.column_settings.media_only":"Только медиа","compose_form.direct_message_warning":"Этот статус будет виден только упомянутым пользователям.","compose_form.direct_message_warning_learn_more":"Узнать больше","compose_form.hashtag_warning":"Этот пост не будет показывается в поиске по хэштегу, т.к. он непубличный. Только публичные посты можно найти в поиске по хэштегу.","compose_form.lock_disclaimer":"Ваш аккаунт не {locked}. Любой человек может подписаться на Вас и просматривать посты для подписчиков.","compose_form.lock_disclaimer.lock":"закрыт","compose_form.placeholder":"О чем Вы думаете?","compose_form.publish":"Трубить","compose_form.publish_loud":"{publish}!","compose_form.sensitive.marked":"Медиафайлы не отмечены как чувствительные","compose_form.sensitive.unmarked":"Медиафайлы не отмечены как чувствительные","compose_form.spoiler.marked":"Текст скрыт за предупреждением","compose_form.spoiler.unmarked":"Текст не скрыт","compose_form.spoiler_placeholder":"Напишите свое предупреждение здесь","confirmation_modal.cancel":"Отмена","confirmations.block.confirm":"Заблокировать","confirmations.block.message":"Вы уверены, что хотите заблокировать {name}?","confirmations.delete.confirm":"Удалить","confirmations.delete.message":"Вы уверены, что хотите удалить этот статус?","confirmations.delete_list.confirm":"Удалить","confirmations.delete_list.message":"Вы действительно хотите навсегда удалить этот список?","confirmations.domain_block.confirm":"Блокировать весь домен","confirmations.domain_block.message":"Вы на самом деле уверены, что хотите блокировать весь {domain}? В большинстве случаев нескольких отдельных блокировок или глушений достаточно.","confirmations.mute.confirm":"Заглушить","confirmations.mute.message":"Вы уверены, что хотите заглушить {name}?","confirmations.redraft.confirm":"Удалить и исправить","confirmations.redraft.message":"Вы уверены, что хотите удалить этот статус и превратить в черновик? Вы потеряете все ответы, продвижения и отметки 'нравится' к нему.","confirmations.unfollow.confirm":"Отписаться","confirmations.unfollow.message":"Вы уверены, что хотите отписаться от {name}?","embed.instructions":"Встройте этот статус на Вашем сайте, скопировав код внизу.","embed.preview":"Так это будет выглядеть:","emoji_button.activity":"Занятия","emoji_button.custom":"Собственные","emoji_button.flags":"Флаги","emoji_button.food":"Еда и напитки","emoji_button.label":"Вставить эмодзи","emoji_button.nature":"Природа","emoji_button.not_found":"Нет эмодзи!! (╯°□°）╯︵ ┻━┻","emoji_button.objects":"Предметы","emoji_button.people":"Люди","emoji_button.recent":"Последние","emoji_button.search":"Найти...","emoji_button.search_results":"Результаты поиска","emoji_button.symbols":"Символы","emoji_button.travel":"Путешествия","empty_column.blocks":"Вы ещё никого не заблокировали.","empty_column.community":"Локальная лента пуста. Напишите что-нибудь, чтобы разогреть народ!","empty_column.direct":"У Вас пока нет личных сообщений. Когда Вы начнёте их отправлять или получать, они появятся здесь.","empty_column.domain_blocks":"Скрытых доменов пока нет.","empty_column.favourited_statuses":"Вы не добавили ни одного статуса в 'Избранное'. Как только Вы это сделаете, они появятся здесь.","empty_column.favourites":"Никто ещё не добавил этот статус в 'Избранное'. Как только кто-то это сделает, они появятся здесь.","empty_column.follow_requests":"Вам ещё не приходили запросы на подписку. Все новые запросы будут показаны здесь.","empty_column.hashtag":"Статусов с таким хэштегом еще не существует.","empty_column.home":"Пока Вы ни на кого не подписаны. Полистайте {public} или используйте поиск, чтобы освоиться и завести новые знакомства.","empty_column.home.public_timeline":"публичные ленты","empty_column.list":"В этом списке пока ничего нет.","empty_column.lists":"У Вас ещё нет списков. Все созданные Вами списки будут показаны здесь.","empty_column.mutes":"Вы ещё никого не заглушили.","empty_column.notifications":"У Вас еще нет уведомлений. Заведите знакомство с другими пользователями, чтобы начать разговор.","empty_column.public":"Здесь ничего нет! Опубликуйте что-нибудь или подпишитесь на пользователей с других узлов, чтобы заполнить ленту.","follow_request.authorize":"Авторизовать","follow_request.reject":"Отказать","getting_started.developers":"Для разработчиков","getting_started.documentation":"Документация","getting_started.find_friends":"Найти друзей из Twitter","getting_started.heading":"Добро пожаловать","getting_started.invite":"Пригласить людей","getting_started.open_source_notice":"Mastodon - сервис с открытым исходным кодом. Вы можете помочь проекту или сообщить о проблемах на GitHub по адресу {github}.","getting_started.security":"Безопасность","getting_started.terms":"Условия использования","home.column_settings.basic":"Основные","home.column_settings.show_reblogs":"Показывать продвижения","home.column_settings.show_replies":"Показывать ответы","keyboard_shortcuts.back":"перейти назад","keyboard_shortcuts.blocked":"чтобы открыть список заблокированных","keyboard_shortcuts.boost":"продвинуть пост","keyboard_shortcuts.column":"фокус на одном из столбцов","keyboard_shortcuts.compose":"фокус на поле ввода","keyboard_shortcuts.description":"Описание","keyboard_shortcuts.direct":"чтобы показать колонку личных сообщений","keyboard_shortcuts.down":"вниз по списку","keyboard_shortcuts.enter":"развернуть пост","keyboard_shortcuts.favourite":"в избранное","keyboard_shortcuts.favourites":"открыть 'Избранное'","keyboard_shortcuts.federated":"перейти к глобальной ленте","keyboard_shortcuts.heading":"Сочетания клавиш","keyboard_shortcuts.home":"перейти к домашней ленте","keyboard_shortcuts.hotkey":"Гор. клавиша","keyboard_shortcuts.legend":"показать это окно","keyboard_shortcuts.local":"перейти к локальной ленте","keyboard_shortcuts.mention":"упомянуть автора поста","keyboard_shortcuts.muted":"открыть список заглушённых","keyboard_shortcuts.my_profile":"перейти к своему профилю","keyboard_shortcuts.notifications":"перейти к уведомлениям","keyboard_shortcuts.pinned":"перейти к закреплённым статусам","keyboard_shortcuts.profile":"перейти к профилю автора","keyboard_shortcuts.reply":"ответить","keyboard_shortcuts.requests":"перейти к запросам на подписку","keyboard_shortcuts.search":"перейти к поиску","keyboard_shortcuts.start":'перейти к разделу "добро пожаловать"',"keyboard_shortcuts.toggle_hidden":"показать/скрыть текст за предупреждением","keyboard_shortcuts.toot":"начать писать новый пост","keyboard_shortcuts.unfocus":"убрать фокус с поля ввода/поиска","keyboard_shortcuts.up":"вверх по списку","lightbox.close":"Закрыть","lightbox.next":"Далее","lightbox.previous":"Назад","lists.account.add":"Добавить в список","lists.account.remove":"Убрать из списка","lists.delete":"Удалить список","lists.edit":"Изменить список","lists.new.create":"Новый список","lists.new.title_placeholder":"Заголовок списка","lists.search":"Искать из ваших подписок","lists.subheading":"Ваши списки","loading_indicator.label":"Загрузка...","media_gallery.toggle_visible":"Показать/скрыть","missing_indicator.label":"Не найдено","missing_indicator.sublabel":"Запрашиваемый ресурс не найден","mute_modal.hide_notifications":"Убрать уведомления от этого пользователя?","navigation_bar.apps":"Mobile apps","navigation_bar.blocks":"Список блокировки","navigation_bar.community_timeline":"Локальная лента","navigation_bar.compose":"Создать новый статус","navigation_bar.direct":"Личные сообщения","navigation_bar.discover":"Изучайте","navigation_bar.domain_blocks":"Скрытые домены","navigation_bar.edit_profile":"Изменить профиль","navigation_bar.favourites":"Понравившееся","navigation_bar.filters":"Заглушенные слова","navigation_bar.follow_requests":"Запросы на подписку","navigation_bar.info":"Об узле","navigation_bar.keyboard_shortcuts":"Сочетания клавиш","navigation_bar.lists":"Списки","navigation_bar.logout":"Выйти","navigation_bar.mutes":"Список глушения","navigation_bar.personal":"Личное","navigation_bar.pins":"Закреплённые посты","navigation_bar.preferences":"Опции","navigation_bar.public_timeline":"Глобальная лента","navigation_bar.security":"Безопасность","notification.favourite":"{name} понравился Ваш статус","notification.follow":"{name} подписался(-лась) на Вас","notification.mention":"{name} упомянул(а) Вас","notification.reblog":"{name} продвинул(а) Ваш статус","notifications.clear":"Очистить уведомления","notifications.clear_confirmation":"Вы уверены, что хотите очистить все уведомления?","notifications.column_settings.alert":"Десктопные уведомления","notifications.column_settings.favourite":"Нравится:","notifications.column_settings.follow":"Новые подписчики:","notifications.column_settings.mention":"Упоминания:","notifications.column_settings.push":"Push-уведомления","notifications.column_settings.push_meta":"Это устройство","notifications.column_settings.reblog":"Продвижения:","notifications.column_settings.show":"Показывать в колонке","notifications.column_settings.sound":"Проигрывать звук","notifications.group":"{count} уведомл.","onboarding.done":"Готово","onboarding.next":"Далее","onboarding.page_five.public_timelines":"Локальная лента показывает публичные посты всех пользователей {domain}. Глобальная лента показывает публичные посты всех людей, на которых подписаны пользователи {domain}. Это - публичные ленты, отличный способ найти новые знакомства.","onboarding.page_four.home":"Домашняя лента показывает посты от тех, на кого Вы подписаны.","onboarding.page_four.notifications":"Колонка уведомлений сообщает о взаимодействии с Вами других людей.","onboarding.page_one.federation":"Mastodon - это сеть независимых серверов, которые вместе образуют единую социальную сеть. Мы называем эти сервера узлами.","onboarding.page_one.full_handle":"Всё в ваших руках","onboarding.page_one.handle_hint":"Это то, что вы посоветуете искать своим друзьям.","onboarding.page_one.welcome":"Добро пожаловать в Mastodon!","onboarding.page_six.admin":"Админ Вашего узла - {admin}.","onboarding.page_six.almost_done":"Почти готово...","onboarding.page_six.appetoot":"Удачи!","onboarding.page_six.apps_available":"Для взаимодействия с Mastodon существуют {apps} для iOS, Android и других платформ.","onboarding.page_six.github":"Mastodon - свободная программа с открытым исходным кодом. Вы можете сообщить о баге, предложить идею или поучаствовать в разработке на {github}.","onboarding.page_six.guidelines":"правила поведения","onboarding.page_six.read_guidelines":"Пожалуйста, прочитайте {guidelines} для {domain}!","onboarding.page_six.various_app":"мобильные приложения","onboarding.page_three.profile":"Отредактируйте свой профиль, чтобы изменить аватар, короткую информацию о Вас, отображаемое имя и другие настройки.","onboarding.page_three.search":"Используйте панель поиска, чтобы искать людей и хэштеги, например, {illustration} и {introductions}. Чтобы найти человека, находящегося на другом узле, введите его полное имя пользователя.","onboarding.page_two.compose":"Пишите посты в колонке автора. Вы можете загружать изображения, изменять настройки видимости и добавлять предупреждения о контенте с помощью иконок внизу.","onboarding.skip":"Пропустить","privacy.change":"Изменить видимость статуса","privacy.direct.long":"Показать только упомянутым","privacy.direct.short":"Направленный","privacy.private.long":"Показать только подписчикам","privacy.private.short":"Приватный","privacy.public.long":"Показать в публичных лентах","privacy.public.short":"Публичный","privacy.unlisted.long":"Не показывать в лентах","privacy.unlisted.short":"Скрытый","regeneration_indicator.label":"Загрузка…","regeneration_indicator.sublabel":"Ваша домашняя лента готовится!","relative_time.days":"{number}д","relative_time.hours":"{number}ч","relative_time.just_now":"только что","relative_time.minutes":"{number}м","relative_time.seconds":"{number}с","reply_indicator.cancel":"Отмена","report.forward":"Переслать для {target}","report.forward_hint":"Этот аккаунт расположен на другом сервере. Отправить туда анонимную копию Вашей жалобы?","report.hint":"Жалоба будет отправлена модераторам Вашего сервера. Вы также можете указать подробную причину жалобы ниже:","report.placeholder":"Комментарий","report.submit":"Отправить","report.target":"Жалуемся на {target}","search.placeholder":"Поиск","search_popout.search_format":"Продвинутый формат поиска","search_popout.tips.full_text":"Возвращает посты, которые Вы написали, отметили как 'избранное', продвинули или в которых были упомянуты, а также содержащие юзернейм, имя и хэштеги.","search_popout.tips.hashtag":"хэштег","search_popout.tips.status":"статус","search_popout.tips.text":"Простой ввод текста покажет совпадающие имена пользователей, отображаемые имена и хэштеги","search_popout.tips.user":"пользователь","search_results.accounts":"Люди","search_results.hashtags":"Хэштеги","search_results.statuses":"Посты","search_results.total":"{count, number} {count, plural, one {результат} few {результата} many {результатов} other {результатов}}","standalone.public_title":"Прямо сейчас","status.block":"Заблокировать @{name}","status.cancel_reblog_private":"Не продвигать","status.cannot_reblog":"Этот статус не может быть продвинут","status.delete":"Удалить","status.detailed_status":"Подробный просмотр обсуждения","status.direct":"Написать @{name}","status.embed":"Встроить","status.favourite":"Нравится","status.filtered":"Отфильтровано","status.load_more":"Показать еще","status.media_hidden":"Медиа скрыто","status.mention":"Упомянуть @{name}","status.more":"Больше","status.mute":"Заглушить @{name}","status.mute_conversation":"Заглушить тред","status.open":"Развернуть статус","status.pin":"Закрепить в профиле","status.pinned":"Закреплённый статус","status.reblog":"Продвинуть","status.reblog_private":"Продвинуть для своей аудитории","status.reblogged_by":"{name} продвинул(а)","status.reblogs.empty":"Никто ещё не продвинул этот статус. Как только кто-то это сделает, они появятся здесь.","status.redraft":"Удалить и исправить","status.reply":"Ответить","status.replyAll":"Ответить на тред","status.report":"Пожаловаться","status.sensitive_toggle":"Нажмите для просмотра","status.sensitive_warning":"Чувствительный контент","status.share":"Поделиться","status.show_less":"Свернуть","status.show_less_all":"Свернуть для всех","status.show_more":"Развернуть","status.show_more_all":"Развернуть для всех","status.unmute_conversation":"Снять глушение с треда","status.unpin":"Открепить от профиля","tabs_bar.federated_timeline":"Глобальная","tabs_bar.home":"Главная","tabs_bar.local_timeline":"Локальная","tabs_bar.notifications":"Уведомления","tabs_bar.search":"Поиск","trends.count_by_accounts":"Популярно у {count} {rawCount, plural, one {человека} few {человек} many {человек} other {человек}}","ui.beforeunload":"Ваш черновик будет утерян, если вы покинете Mastodon.","upload_area.title":"Перетащите сюда, чтобы загрузить","upload_button.label":"Добавить медиаконтент","upload_form.description":"Описать для людей с нарушениями зрения","upload_form.focus":"Обрезать","upload_form.undo":"Отменить","upload_progress.label":"Загрузка...","video.close":"Закрыть видео","video.exit_fullscreen":"Покинуть полноэкранный режим","video.expand":"Развернуть видео","video.fullscreen":"Полноэкранный режим","video.hide":"Скрыть видео","video.mute":"Заглушить звук","video.pause":"Пауза","video.play":"Пуск","video.unmute":"Включить звук"}},412:function(o,e,t){"use strict";t.r(e);var a=t(306),n=t(305),s=t.n(n),i=t(8);Object(i.setLocale)({messages:a,localeData:s.a})}},[[412,0]]]);
//# sourceMappingURL=locale_ru.js.map