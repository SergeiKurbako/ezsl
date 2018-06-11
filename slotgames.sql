-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Ноя 14 2017 г., 10:46
-- Версия сервера: 5.7.20-0ubuntu0.16.04.1
-- Версия PHP: 7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `slotgames`
--

-- --------------------------------------------------------

--
-- Структура таблицы `games`
--

CREATE TABLE `games` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gameName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gameRules` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `games`
--

INSERT INTO `games` (`id`, `name`, `gameName`, `gameRules`, `created_at`, `updated_at`) VALUES
(1, 'keks', 'keks', '{"lines":[[1,4,7,10,13],[0,3,6,9,12],[2,5,8,11,14],[0,4,8,10,12],[2,4,6,10,14],[0,3,7,9,12],[2,5,7,11,14],[1,5,8,11,13],[1,3,6,9,13]],"winRules":[[0,3,2,0],[0,4,3,0],[0,5,10,0],[1,3,3,0],[1,4,5,0],[1,5,20,0],[2,3,5,0],[2,4,10,0],[2,5,50,0],[3,3,10,0],[3,4,30,0],[3,5,100,0],[4,3,20,0],[4,4,50,0],[4,5,200,0],[5,3,30,0],[5,4,100,0],[5,5,500,0],[6,3,100,0],[6,4,500,0],[6,5,2000,0],[7,3,200,0],[7,4,1000,0],[7,5,5000,0]],"cards":[[0,13,26,39],[1,14,27,40],[2,15,28,41],[3,16,29,42],[4,17,30,43],[5,18,31,44],[6,19,32,45],[7,20,33,46],[8,21,34,47],[9,22,35,48],[10,23,36,49],[11,24,37,50],[12,25,38,51]],"numberOfCellValues":9}', '2017-02-19 21:00:00', '2017-03-06 03:37:24'),
(2, 'alaskan fishing', 'alaskanFishing', '{"lines":[[0,3,6,9,12],[0,3,6,9,13],[0,3,6,9,14],[0,3,6,10,12],[0,3,6,10,13],[0,3,6,10,14],[0,3,6,11,12],[0,3,6,11,13],[0,3,6,11,14],[0,3,7,9,12],[0,3,7,9,13],[0,3,7,9,14],[0,3,7,10,12],[0,3,7,10,13],[0,3,7,10,14],[0,3,7,11,12],[0,3,7,11,13],[0,3,7,11,14],[0,3,8,9,12],[0,3,8,9,13],[0,3,8,9,14],[0,3,8,10,12],[0,3,8,10,13],[0,3,8,10,14],[0,3,8,11,12],[0,3,8,11,13],[0,3,8,11,14],[0,4,6,9,12],[0,4,6,9,13],[0,4,6,9,14],[0,4,6,10,12],[0,4,6,10,13],[0,4,6,10,14],[0,4,6,11,12],[0,4,6,11,13],[0,4,6,11,14],[0,4,7,9,12],[0,4,7,9,13],[0,4,7,9,14],[0,4,7,10,12],[0,4,7,10,13],[0,4,7,10,14],[0,4,7,11,12],[0,4,7,11,13],[0,4,7,11,14],[0,4,8,9,12],[0,4,8,9,13],[0,4,8,9,14],[0,4,8,10,12],[0,4,8,10,13],[0,4,8,10,14],[0,4,8,11,12],[0,4,8,11,13],[0,4,8,11,14],[0,5,6,9,12],[0,5,6,9,13],[0,5,6,9,14],[0,5,6,10,12],[0,5,6,10,13],[0,5,6,10,14],[0,5,6,11,12],[0,5,6,11,13],[0,5,6,11,14],[0,5,7,9,12],[0,5,7,9,13],[0,5,7,9,14],[0,5,7,10,12],[0,5,7,10,13],[0,5,7,10,14],[0,5,7,11,12],[0,5,7,11,13],[0,5,7,11,14],[0,5,8,9,12],[0,5,8,9,13],[0,5,8,9,14],[0,5,8,10,12],[0,5,8,10,13],[0,5,8,10,14],[0,5,8,11,12],[0,5,8,11,13],[0,5,8,11,14],[1,3,6,9,12],[1,3,6,9,13],[1,3,6,9,14],[1,3,6,10,12],[1,3,6,10,13],[1,3,6,10,14],[1,3,6,11,12],[1,3,6,11,13],[1,3,6,11,14],[1,3,7,9,12],[1,3,7,9,13],[1,3,7,9,14],[1,3,7,10,12],[1,3,7,10,13],[1,3,7,10,14],[1,3,7,11,12],[1,3,7,11,13],[1,3,7,11,14],[1,3,8,9,12],[1,3,8,9,13],[1,3,8,9,14],[1,3,8,10,12],[1,3,8,10,13],[1,3,8,10,14],[1,3,8,11,12],[1,3,8,11,13],[1,3,8,11,14],[1,4,6,9,12],[1,4,6,9,13],[1,4,6,9,14],[1,4,6,10,12],[1,4,6,10,13],[1,4,6,10,14],[1,4,6,11,12],[1,4,6,11,13],[1,4,6,11,14],[1,4,7,9,12],[1,4,7,9,13],[1,4,7,9,14],[1,4,7,10,12],[1,4,7,10,13],[1,4,7,10,14],[1,4,7,11,12],[1,4,7,11,13],[1,4,7,11,14],[1,4,8,9,12],[1,4,8,9,13],[1,4,8,9,14],[1,4,8,10,12],[1,4,8,10,13],[1,4,8,10,14],[1,4,8,11,12],[1,4,8,11,13],[1,4,8,11,14],[1,5,6,9,12],[1,5,6,9,13],[1,5,6,9,14],[1,5,6,10,12],[1,5,6,10,13],[1,5,6,10,14],[1,5,6,11,12],[1,5,6,11,13],[1,5,6,11,14],[1,5,7,9,12],[1,5,7,9,13],[1,5,7,9,14],[1,5,7,10,12],[1,5,7,10,13],[1,5,7,10,14],[1,5,7,11,12],[1,5,7,11,13],[1,5,7,11,14],[1,5,8,9,12],[1,5,8,9,13],[1,5,8,9,14],[1,5,8,10,12],[1,5,8,10,13],[1,5,8,10,14],[1,5,8,11,12],[1,5,8,11,13],[1,5,8,11,14],[2,3,6,9,12],[2,3,6,9,13],[2,3,6,9,14],[2,3,6,10,12],[2,3,6,10,13],[2,3,6,10,14],[2,3,6,11,12],[2,3,6,11,13],[2,3,6,11,14],[2,3,7,9,12],[2,3,7,9,13],[2,3,7,9,14],[2,3,7,10,12],[2,3,7,10,13],[2,3,7,10,14],[2,3,7,11,12],[2,3,7,11,13],[2,3,7,11,14],[2,3,8,9,12],[2,3,8,9,13],[2,3,8,9,14],[2,3,8,10,12],[2,3,8,10,13],[2,3,8,10,14],[2,3,8,11,12],[2,3,8,11,13],[2,3,8,11,14],[2,4,6,9,12],[2,4,6,9,13],[2,4,6,9,14],[2,4,6,10,12],[2,4,6,10,13],[2,4,6,10,14],[2,4,6,11,12],[2,4,6,11,13],[2,4,6,11,14],[2,4,7,9,12],[2,4,7,9,13],[2,4,7,9,14],[2,4,7,10,12],[2,4,7,10,13],[2,4,7,10,14],[2,4,7,11,12],[2,4,7,11,13],[2,4,7,11,14],[2,4,8,9,12],[2,4,8,9,13],[2,4,8,9,14],[2,4,8,10,12],[2,4,8,10,13],[2,4,8,10,14],[2,4,8,11,12],[2,4,8,11,13],[2,4,8,11,14],[2,5,6,9,12],[2,5,6,9,13],[2,5,6,9,14],[2,5,6,10,12],[2,5,6,10,13],[2,5,6,10,14],[2,5,6,11,12],[2,5,6,11,13],[2,5,6,11,14],[2,5,7,9,12],[2,5,7,9,13],[2,5,7,9,14],[2,5,7,10,12],[2,5,7,10,13],[2,5,7,10,14],[2,5,7,11,12],[2,5,7,11,13],[2,5,7,11,14],[2,5,8,9,12],[2,5,8,9,13],[2,5,8,9,14],[2,5,8,10,12],[2,5,8,10,13],[2,5,8,10,14],[2,5,8,11,12],[2,5,8,11,13],[2,5,8,11,14]],"winRules":[[0,3,60],[0,4,100],[0,5,500],[1,3,50],[1,4,80],[1,5,400],[2,3,30],[2,4,60],[2,5,350],[3,3,20],[3,4,50],[3,5,300],[4,3,15],[4,4,40],[4,5,200],[5,3,7],[5,4,20],[5,5,100],[6,3,7],[6,4,20],[6,5,100],[7,3,5],[7,4,15],[7,5,80],[8,3,5],[8,4,15],[8,5,80],[9,3,3],[9,4,10],[9,5,60],[10,3,3],[10,4,10],[10,5,60],[11,3,5],[11,4,10],[11,5,100]],"numberOfCellValues":12}', '2017-02-19 21:00:00', '2017-03-06 04:35:38'),
(3, 'Gonzo\'s Quest', 'gonzosQuest', '{"lines":[[1,4,7,10,13],[0,3,6,9,12],[2,5,8,11,14],[0,4,8,10,12],[2,4,6,10,14],[0,3,7,9,12],[2,5,7,11,14],[1,5,8,11,13],[1,3,6,9,13],[1,3,7,9,13],[1,5,7,11,13],[0,4,6,10,12],[2,4,8,10,14],[1,4,6,10,13],[1,4,8,10,13],[0,4,7,10,12],[2,4,7,10,14],[0,4,8,11,14],[2,4,6,9,12],[0,5,6,11,12]],"winRules":[[0,3,3,0],[0,4,10,0],[0,5,50,0],[1,3,4,0],[1,4,15,0],[1,5,75,0],[2,3,5,0],[2,4,20,0],[2,5,100,0],[3,3,10,0],[3,4,25,0],[3,5,200,0],[4,3,15,0],[4,4,50,0],[4,5,500,0],[5,3,20,0],[5,4,100,0],[5,5,1000,0],[6,3,50,0],[6,4,250,0],[6,5,2500,0],[7,3,0],[7,4,0],[7,5,0]],"numberOfCellValues":9}', '2017-02-27 21:00:00', '2017-03-06 04:35:53');

-- --------------------------------------------------------

--
-- Структура таблицы `gamesassions`
--

CREATE TABLE `gamesassions` (
  `id` int(10) UNSIGNED NOT NULL,
  `sessionId` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `hash` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2014_10_12_000000_create_users_table', 1),
('2014_10_12_100000_create_password_resets_table', 1),
('2017_02_20_064437_create_games_table', 1),
('2017_02_20_070744_create_gamesassions_table', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `balance` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `balance`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'automata', 10, '', '', NULL, NULL, '2017-05-05 09:34:11');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `gamesassions`
--
ALTER TABLE `gamesassions`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`),
  ADD KEY `password_resets_token_index` (`token`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `games`
--
ALTER TABLE `games`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT для таблицы `gamesassions`
--
ALTER TABLE `gamesassions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
