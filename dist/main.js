/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_topAnime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/topAnime */ \"./src/scripts/topAnime.js\");\n/* harmony import */ var _scripts_topAnime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_topAnime__WEBPACK_IMPORTED_MODULE_0__);\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  async function fetchTopAnimeGenres() {\n    const response = await fetch(`https://api.jikan.moe/v4/top/anime`);\n    const data = await response.json();\n    const animeGenres = {};\n    data.data.forEach(datum => {\n      const title = datum.title;\n      const genres = datum.genres;\n      genres.forEach(genre => {\n        const genreName = genre.name;\n        if (Object.keys(animeGenres).includes(genreName)) {\n          animeGenres[genreName].push(title);\n        } else {\n          animeGenres[genreName] = [title];\n        }\n        ;\n      });\n    });\n    return animeGenres;\n  }\n  fetchTopAnimeGenres();\n});\n\n// bar graph with dummy data \n\n// const data = [\n//     { name: 'a2', score: 50 },\n//     { name: 'a1', score: 40 },\n//     { name: 'a4', score: 20 },\n//     { name: 'a3', score: 10 },\n\n// ];\n\n// let margin = { top: 20, right: 20, bottom: 20, left: 20 };\n// let width = 500;\n// let height = 500; \n\n// const canva = d3.select(\"#canva\")\n//                 .attr(\"width\", 500)\n//                 .attr(\"height\", 500)\n\n// const svg = canva.append(\"svg\")\n//             .attr(\"height\", height - margin.top - margin.bottom)\n//             .attr(\"width\", width - margin.left - margin.right)\n//             .attr(\"viewBox\", [0, 0, width, height]);\n\n// const x = d3.scaleBand()\n//     .domain(d3.range(data.length))\n//     .range([margin.left, width - margin.right])\n//     .padding(0.1);\n\n// const y = d3.scaleLinear()\n//     .domain([0, 100])\n//     .range([height - margin.bottom, margin.top])\n\n// svg\n//     .append('g')\n//     .attr('fill', 'blue')\n//     .selectAll('rect')\n//     .data(data.sort( (a,b) => d3.descending(a.score, b.score)))\n//     .join('rect')\n//         .attr('x', (d, i) => x(i))\n//         .attr('y', (d) => y(d.score))\n//         .attr('height', d => y(0) - y(d.score))\n//         .attr('width', x.bandwidth())\n\n// function xAxis(g) {\n//     g.attr('transform', `translate(0, ${width - margin.bottom})`)\n//     g.call(d3.axisBottom(x).tickFormat( i => data[i].name))\n// }\n\n// function yAxis(g) {\n//     g.attr('transform', `translate(${margin.left}, 0)`)\n//     g.call(d3.axisLeft(y).ticks(null, data.format))\n// }\n\n// svg.append('g').call(xAxis)\n// svg.append('g').call(yAxis)\n// svg.node();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTBDO0FBRzFDQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFFaEQsZUFBZUMsbUJBQW1CQSxDQUFBLEVBQUc7SUFDakMsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSxvQ0FBbUMsQ0FBQztJQUNsRSxNQUFNQyxJQUFJLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFJLENBQUMsQ0FBQztJQUNsQyxNQUFNQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBRXRCRixJQUFJLENBQUNBLElBQUksQ0FBQ0csT0FBTyxDQUFDQyxLQUFLLElBQUk7TUFDdkIsTUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNDLEtBQUs7TUFDekIsTUFBTUMsTUFBTSxHQUFHRixLQUFLLENBQUNFLE1BQU07TUFFM0JBLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDSSxLQUFLLElBQUk7UUFDcEIsTUFBTUMsU0FBUyxHQUFHRCxLQUFLLENBQUNFLElBQUk7UUFDNUIsSUFBSUMsTUFBTSxDQUFDQyxJQUFJLENBQUNULFdBQVcsQ0FBQyxDQUFDVSxRQUFRLENBQUNKLFNBQVMsQ0FBQyxFQUFFO1VBQzlDTixXQUFXLENBQUNNLFNBQVMsQ0FBQyxDQUFDSyxJQUFJLENBQUNSLEtBQUssQ0FBQztRQUN0QyxDQUFDLE1BQU07VUFDSEgsV0FBVyxDQUFDTSxTQUFTLENBQUMsR0FBRSxDQUFDSCxLQUFLLENBQUM7UUFDbkM7UUFBQztNQUNMLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztJQUVGLE9BQU9ILFdBQVc7RUFDdEI7RUFHQUwsbUJBQW1CLENBQUMsQ0FBQztBQUd6QixDQUFDLENBQUM7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvcEFuaW1lIGZyb20gJy4vc2NyaXB0cy90b3BBbmltZSc7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVG9wQW5pbWVHZW5yZXMoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmppa2FuLm1vZS92NC90b3AvYW5pbWVgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc3QgYW5pbWVHZW5yZXMgPSB7fTtcblxuICAgICAgICBkYXRhLmRhdGEuZm9yRWFjaChkYXR1bSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRhdHVtLnRpdGxlO1xuICAgICAgICAgICAgY29uc3QgZ2VucmVzID0gZGF0dW0uZ2VucmVzO1xuXG4gICAgICAgICAgICBnZW5yZXMuZm9yRWFjaChnZW5yZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2VucmVOYW1lID0gZ2VucmUubmFtZVxuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhhbmltZUdlbnJlcykuaW5jbHVkZXMoZ2VucmVOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBhbmltZUdlbnJlc1tnZW5yZU5hbWVdLnB1c2godGl0bGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1lR2VucmVzW2dlbnJlTmFtZV09IFt0aXRsZV07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBhbmltZUdlbnJlcztcbiAgICB9XG4gICAgXG4gICAgXG4gICAgZmV0Y2hUb3BBbmltZUdlbnJlcygpXG4gICAgXG4gICAgXG59KVxuXG4vLyBiYXIgZ3JhcGggd2l0aCBkdW1teSBkYXRhIFxuXG4vLyBjb25zdCBkYXRhID0gW1xuLy8gICAgIHsgbmFtZTogJ2EyJywgc2NvcmU6IDUwIH0sXG4vLyAgICAgeyBuYW1lOiAnYTEnLCBzY29yZTogNDAgfSxcbi8vICAgICB7IG5hbWU6ICdhNCcsIHNjb3JlOiAyMCB9LFxuLy8gICAgIHsgbmFtZTogJ2EzJywgc2NvcmU6IDEwIH0sXG5cbi8vIF07XG5cbi8vIGxldCBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiAyMCwgYm90dG9tOiAyMCwgbGVmdDogMjAgfTtcbi8vIGxldCB3aWR0aCA9IDUwMDtcbi8vIGxldCBoZWlnaHQgPSA1MDA7IFxuXG4vLyBjb25zdCBjYW52YSA9IGQzLnNlbGVjdChcIiNjYW52YVwiKVxuLy8gICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgNTAwKVxuLy8gICAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDUwMClcblxuLy8gY29uc3Qgc3ZnID0gY2FudmEuYXBwZW5kKFwic3ZnXCIpXG4vLyAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbSlcbi8vICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodClcbi8vICAgICAgICAgICAgIC5hdHRyKFwidmlld0JveFwiLCBbMCwgMCwgd2lkdGgsIGhlaWdodF0pO1xuXG4vLyBjb25zdCB4ID0gZDMuc2NhbGVCYW5kKClcbi8vICAgICAuZG9tYWluKGQzLnJhbmdlKGRhdGEubGVuZ3RoKSlcbi8vICAgICAucmFuZ2UoW21hcmdpbi5sZWZ0LCB3aWR0aCAtIG1hcmdpbi5yaWdodF0pXG4vLyAgICAgLnBhZGRpbmcoMC4xKTtcblxuLy8gY29uc3QgeSA9IGQzLnNjYWxlTGluZWFyKClcbi8vICAgICAuZG9tYWluKFswLCAxMDBdKVxuLy8gICAgIC5yYW5nZShbaGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSwgbWFyZ2luLnRvcF0pXG5cbi8vIHN2Z1xuLy8gICAgIC5hcHBlbmQoJ2cnKVxuLy8gICAgIC5hdHRyKCdmaWxsJywgJ2JsdWUnKVxuLy8gICAgIC5zZWxlY3RBbGwoJ3JlY3QnKVxuLy8gICAgIC5kYXRhKGRhdGEuc29ydCggKGEsYikgPT4gZDMuZGVzY2VuZGluZyhhLnNjb3JlLCBiLnNjb3JlKSkpXG4vLyAgICAgLmpvaW4oJ3JlY3QnKVxuLy8gICAgICAgICAuYXR0cigneCcsIChkLCBpKSA9PiB4KGkpKVxuLy8gICAgICAgICAuYXR0cigneScsIChkKSA9PiB5KGQuc2NvcmUpKVxuLy8gICAgICAgICAuYXR0cignaGVpZ2h0JywgZCA9PiB5KDApIC0geShkLnNjb3JlKSlcbi8vICAgICAgICAgLmF0dHIoJ3dpZHRoJywgeC5iYW5kd2lkdGgoKSlcblxuLy8gZnVuY3Rpb24geEF4aXMoZykge1xuLy8gICAgIGcuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCAke3dpZHRoIC0gbWFyZ2luLmJvdHRvbX0pYClcbi8vICAgICBnLmNhbGwoZDMuYXhpc0JvdHRvbSh4KS50aWNrRm9ybWF0KCBpID0+IGRhdGFbaV0ubmFtZSkpXG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHlBeGlzKGcpIHtcbi8vICAgICBnLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sIDApYClcbi8vICAgICBnLmNhbGwoZDMuYXhpc0xlZnQoeSkudGlja3MobnVsbCwgZGF0YS5mb3JtYXQpKVxuLy8gfVxuXG4vLyBzdmcuYXBwZW5kKCdnJykuY2FsbCh4QXhpcylcbi8vIHN2Zy5hcHBlbmQoJ2cnKS5jYWxsKHlBeGlzKVxuLy8gc3ZnLm5vZGUoKTsiXSwibmFtZXMiOlsidG9wQW5pbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmZXRjaFRvcEFuaW1lR2VucmVzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiYW5pbWVHZW5yZXMiLCJmb3JFYWNoIiwiZGF0dW0iLCJ0aXRsZSIsImdlbnJlcyIsImdlbnJlIiwiZ2VucmVOYW1lIiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJpbmNsdWRlcyIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/topAnime.js":
/*!*********************************!*\
  !*** ./src/scripts/topAnime.js ***!
  \*********************************/
/***/ (function() {

eval("async function fetchTopAnime() {\n  const response = await fetch(`https://api.jikan.moe/v4/top/anime`);\n  const data = await response.json();\n  const animeDetails = [];\n  data.data.forEach(datum => {\n    const title = datum.title;\n    const score = datum.score;\n    const genres = datum.genres;\n    animeDetails.push({\n      title,\n      score,\n      genres\n    });\n  });\n  return animeDetails;\n}\n// graphing needs to be fine tuned\n\nasync function drawTopAnime() {\n  const data = await fetchTopAnime();\n  // const canva = document.querySelector('#canva')\n  // canva.append(\"svg\")\n\n  let margin = {\n    top: 20,\n    right: 20,\n    bottom: 20,\n    left: 20\n  };\n  let width = 500;\n  let height = 500;\n  const canva = d3.select(\"#canva\").attr(\"width\", 500).attr(\"height\", 500);\n  const svg = canva.append(\"svg\").attr(\"height\", height - margin.top - margin.bottom).attr(\"width\", width - margin.left - margin.right).attr(\"viewBox\", [0, 0, width, height]);\n  const x = d3.scaleBand().domain(d3.range(data.length)).range([margin.left, width - margin.right]).padding(0.1);\n  const y = d3.scaleLinear().domain([0, 100]).range([height - margin.bottom, margin.top]);\n  svg.append('g').attr('fill', 'blue').selectAll('rect').data(data.sort((a, b) => d3.descending(a.score, b.score))).join('rect').attr('x', (d, i) => x(i)).attr('y', d => y(d.score)).attr('height', d => y(0) - y(d.score)).attr('width', x.bandwidth());\n  function xAxis(g) {\n    g.attr('transform', `translate(0, ${width - margin.bottom})`);\n    g.call(d3.axisBottom(x).tickFormat(i => data[i].name));\n  }\n  function yAxis(g) {\n    g.attr('transform', `translate(${margin.left}, 0)`);\n    g.call(d3.axisLeft(y).ticks(null, data.format));\n  }\n  svg.append('g').call(xAxis);\n  svg.append('g').call(yAxis);\n  svg.node();\n}\n\n// let canva = d3.select(\"#canva\")\n//   .append(\"svg\")\n//   .attr(\"width\", width - margin.left - margin.right)\n//   .attr(\"height\", height - margin.top - margin.bottom)\n//   .append(\"viewBox\", [0, 0, width, height]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90b3BBbmltZS5qcy5qcyIsIm5hbWVzIjpbImZldGNoVG9wQW5pbWUiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJhbmltZURldGFpbHMiLCJmb3JFYWNoIiwiZGF0dW0iLCJ0aXRsZSIsInNjb3JlIiwiZ2VucmVzIiwicHVzaCIsImRyYXdUb3BBbmltZSIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwiY2FudmEiLCJkMyIsInNlbGVjdCIsImF0dHIiLCJzdmciLCJhcHBlbmQiLCJ4Iiwic2NhbGVCYW5kIiwiZG9tYWluIiwicmFuZ2UiLCJsZW5ndGgiLCJwYWRkaW5nIiwieSIsInNjYWxlTGluZWFyIiwic2VsZWN0QWxsIiwic29ydCIsImEiLCJiIiwiZGVzY2VuZGluZyIsImpvaW4iLCJkIiwiaSIsImJhbmR3aWR0aCIsInhBeGlzIiwiZyIsImNhbGwiLCJheGlzQm90dG9tIiwidGlja0Zvcm1hdCIsIm5hbWUiLCJ5QXhpcyIsImF4aXNMZWZ0IiwidGlja3MiLCJmb3JtYXQiLCJub2RlIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvdG9wQW5pbWUuanM/ZDA5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBmZXRjaFRvcEFuaW1lKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmppa2FuLm1vZS92NC90b3AvYW5pbWVgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IGFuaW1lRGV0YWlscyA9IFtdO1xuXG4gICAgZGF0YS5kYXRhLmZvckVhY2goZGF0dW0gPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRhdHVtLnRpdGxlO1xuICAgICAgICBjb25zdCBzY29yZSA9IGRhdHVtLnNjb3JlO1xuICAgICAgICBjb25zdCBnZW5yZXMgPSBkYXR1bS5nZW5yZXM7XG5cbiAgICAgICAgYW5pbWVEZXRhaWxzLnB1c2goe3RpdGxlLCBzY29yZSwgZ2VucmVzfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIGFuaW1lRGV0YWlscyBcbn1cbiAvLyBncmFwaGluZyBuZWVkcyB0byBiZSBmaW5lIHR1bmVkXG4gXG5hc3luYyBmdW5jdGlvbiBkcmF3VG9wQW5pbWUoKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoVG9wQW5pbWUoKTtcbiAgICAvLyBjb25zdCBjYW52YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW52YScpXG4gICAgLy8gY2FudmEuYXBwZW5kKFwic3ZnXCIpXG5cblxuICAgIGxldCBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiAyMCwgYm90dG9tOiAyMCwgbGVmdDogMjAgfTtcbiAgICBsZXQgd2lkdGggPSA1MDA7XG4gICAgbGV0IGhlaWdodCA9IDUwMDsgXG4gICAgXG4gICAgY29uc3QgY2FudmEgPSBkMy5zZWxlY3QoXCIjY2FudmFcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCA1MDApXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDUwMClcbiAgICBcbiAgICBjb25zdCBzdmcgPSBjYW52YS5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbSlcbiAgICAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFswLCAwLCB3aWR0aCwgaGVpZ2h0XSk7XG4gICAgXG4gICAgY29uc3QgeCA9IGQzLnNjYWxlQmFuZCgpXG4gICAgICAgIC5kb21haW4oZDMucmFuZ2UoZGF0YS5sZW5ndGgpKVxuICAgICAgICAucmFuZ2UoW21hcmdpbi5sZWZ0LCB3aWR0aCAtIG1hcmdpbi5yaWdodF0pXG4gICAgICAgIC5wYWRkaW5nKDAuMSk7XG4gICAgXG4gICAgY29uc3QgeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgLmRvbWFpbihbMCwgMTAwXSlcbiAgICAgICAgLnJhbmdlKFtoZWlnaHQgLSBtYXJnaW4uYm90dG9tLCBtYXJnaW4udG9wXSlcbiAgICBcbiAgICBzdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgJ2JsdWUnKVxuICAgICAgICAuc2VsZWN0QWxsKCdyZWN0JylcbiAgICAgICAgLmRhdGEoZGF0YS5zb3J0KCAoYSxiKSA9PiBkMy5kZXNjZW5kaW5nKGEuc2NvcmUsIGIuc2NvcmUpKSlcbiAgICAgICAgLmpvaW4oJ3JlY3QnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAoZCwgaSkgPT4geChpKSlcbiAgICAgICAgICAgIC5hdHRyKCd5JywgKGQpID0+IHkoZC5zY29yZSkpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgZCA9PiB5KDApIC0geShkLnNjb3JlKSlcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHguYmFuZHdpZHRoKCkpXG4gICAgXG4gICAgZnVuY3Rpb24geEF4aXMoZykge1xuICAgICAgICBnLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwgJHt3aWR0aCAtIG1hcmdpbi5ib3R0b219KWApXG4gICAgICAgIGcuY2FsbChkMy5heGlzQm90dG9tKHgpLnRpY2tGb3JtYXQoIGkgPT4gZGF0YVtpXS5uYW1lKSlcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24geUF4aXMoZykge1xuICAgICAgICBnLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sIDApYClcbiAgICAgICAgZy5jYWxsKGQzLmF4aXNMZWZ0KHkpLnRpY2tzKG51bGwsIGRhdGEuZm9ybWF0KSlcbiAgICB9XG4gICAgXG4gICAgc3ZnLmFwcGVuZCgnZycpLmNhbGwoeEF4aXMpXG4gICAgc3ZnLmFwcGVuZCgnZycpLmNhbGwoeUF4aXMpXG4gICAgc3ZnLm5vZGUoKTtcbn1cblxuXG4vLyBsZXQgY2FudmEgPSBkMy5zZWxlY3QoXCIjY2FudmFcIilcbi8vICAgLmFwcGVuZChcInN2Z1wiKVxuLy8gICAuYXR0cihcIndpZHRoXCIsIHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQpXG4vLyAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tKVxuLy8gICAuYXBwZW5kKFwidmlld0JveFwiLCBbMCwgMCwgd2lkdGgsIGhlaWdodF0pO1xuXG5cblxuXG5cblxuIl0sIm1hcHBpbmdzIjoiQUFBQSxlQUFlQSxhQUFhQSxDQUFBLEVBQUc7RUFDM0IsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSxvQ0FBbUMsQ0FBQztFQUNsRSxNQUFNQyxJQUFJLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFJLENBQUMsQ0FBQztFQUNsQyxNQUFNQyxZQUFZLEdBQUcsRUFBRTtFQUV2QkYsSUFBSSxDQUFDQSxJQUFJLENBQUNHLE9BQU8sQ0FBQ0MsS0FBSyxJQUFJO0lBQ3ZCLE1BQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDQyxLQUFLO0lBQ3pCLE1BQU1DLEtBQUssR0FBR0YsS0FBSyxDQUFDRSxLQUFLO0lBQ3pCLE1BQU1DLE1BQU0sR0FBR0gsS0FBSyxDQUFDRyxNQUFNO0lBRTNCTCxZQUFZLENBQUNNLElBQUksQ0FBQztNQUFDSCxLQUFLO01BQUVDLEtBQUs7TUFBRUM7SUFBTSxDQUFDLENBQUM7RUFDN0MsQ0FBQyxDQUFDO0VBRUYsT0FBT0wsWUFBWTtBQUN2QjtBQUNDOztBQUVELGVBQWVPLFlBQVlBLENBQUEsRUFBRztFQUMxQixNQUFNVCxJQUFJLEdBQUcsTUFBTUgsYUFBYSxDQUFDLENBQUM7RUFDbEM7RUFDQTs7RUFHQSxJQUFJYSxNQUFNLEdBQUc7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\n//# sourceURL=webpack-internal:///./src/scripts/topAnime.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;