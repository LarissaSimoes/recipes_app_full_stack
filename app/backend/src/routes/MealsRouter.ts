import { Request, Router, Response } from 'express';
import MealsController from '../controllers/MealsController';

const mealsController = new MealsController();

const router = Router();

router.get('/area', (req: Request, res: Response) => mealsController.findByArea(req, res));

router.get('/areas', (req: Request, res: Response) => mealsController.getAllAreas(req, res));

router.get('/categories', (req: Request, res: Response) => mealsController.getAllCategories(req, res));

router.get('/category', (req: Request, res: Response) => mealsController.findByCategory(req, res));

router.get('/letter', (req: Request, res: Response) => mealsController.findByFirstLetter(req, res));

router.get('/name', (req: Request, res: Response) => mealsController.findByName(req, res));

router.get('/names', (req: Request, res: Response) => mealsController.getAllNames(req, res));

router.get('/random', (req: Request, res: Response) => mealsController.findRandom(req, res));

router.get('/ingredient', (req: Request, res: Response) => mealsController.findByIngredient(req, res));

router.get('/:id', (req: Request, res: Response) => mealsController.findById(req, res));

router.get('/', (req: Request, res: Response) => mealsController.findAll(req, res));


export default router;