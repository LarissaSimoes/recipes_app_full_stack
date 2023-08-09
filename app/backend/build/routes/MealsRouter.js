"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MealsController_1 = __importDefault(require("../controllers/MealsController"));
const mealsController = new MealsController_1.default();
const router = (0, express_1.Router)();
router.get('/', (req, res) => mealsController.findAll(req, res));
router.get('/:id', (req, res) => mealsController.findById(req, res));
router.get('/:name', (req, res) => mealsController.findByName(req, res));
exports.default = router;