exports.seed = function(knex) {
  const { presentMinusXHours } = require("../helpers/timestampOffsetFns");
  // Deletes ALL existing entries
  return knex.raw("TRUNCATE TABLE foods RESTART IDENTITY CASCADE").then(() => {
    // Inserts seed entries
    return knex("foods").insert([
      {
        // "id": 1,
        fatsecret_food_id: 3433,
        serving_id: 10690,
        retrieved_at: presentMinusXHours(1),
        food_name: "White Bread",
        food_type: "Generic",
        brand_name: null,
        serving_url:
          "https://www.fatsecret.com/calories-nutrition/generic/bread-white?portionid=10690&portionamount=1.000",
        serving_desc: "1 very thin slice",
        serving_qty: "1.00",
        serving_unit: "very thin slice",
        metric_serving_amt: "15.00",
        metric_serving_unit: "g",
        calories_kcal: "40.00",
        fat_g: "0.49",
        carbs_g: "7.59",
        protein_g: "1.15",
        saturated_fat_g: "0.11",
        monounsaturated_fat_g: "0.10",
        polyunsaturated_fat_g: "0.20",
        trans_fat_g: null,
        fiber_g: "0.40",
        sugar_g: "0.65",
        cholesterol_mg: "0.00",
        sodium_mg: "102.00",
        potassium_mg: "15.00",
        vitamin_a_daily_pct: "0.00",
        vitamin_c_daily_pct: "0.00",
        calcium_daily_pct: "2.00",
        iron_daily_pct: "3.00"
      },
      {
        // "id": 2,
        fatsecret_food_id: 4881,
        serving_id: 17170,
        retrieved_at: presentMinusXHours(25),
        food_name: "Cheese Pizza",
        food_type: "Generic",
        brand_name: null,
        serving_url:
          "https://www.fatsecret.com/calories-nutrition/generic/pizza-cheese?portionid=17170&portionamount=1.000",
        serving_desc: '1 miniature (5" dia)',
        serving_qty: "1.00",
        serving_unit: 'miniature pizza (5" dia)',
        metric_serving_amt: "120.00",
        metric_serving_unit: "g",
        calories_kcal: "331.00",
        fat_g: "14.09",
        carbs_g: "36.40",
        protein_g: "14.80",
        saturated_fat_g: "6.01",
        monounsaturated_fat_g: "3.94",
        polyunsaturated_fat_g: "2.48",
        trans_fat_g: null,
        fiber_g: "2.30",
        sugar_g: "4.27",
        cholesterol_mg: "29.00",
        sodium_mg: "644.00",
        potassium_mg: "193.00",
        vitamin_a_daily_pct: "9.00",
        vitamin_c_daily_pct: "1.00",
        calcium_daily_pct: "25.00",
        iron_daily_pct: "12.00"
      },
      {
        // "id": 3,
        fatsecret_food_id: 4891,
        serving_id: 17336,
        retrieved_at: presentMinusXHours(23),
        food_name: "Pizza with Meat and Vegetables",
        food_type: "Generic",
        brand_name: null,
        serving_url:
          "https://www.fatsecret.com/calories-nutrition/generic/pizza-with-meat-and-vegetables?portionid=17336&portionamount=1.000",
        serving_desc: '1 small (8" dia)',
        serving_qty: "1.00",
        serving_unit: 'small pizza (8" dia)',
        metric_serving_amt: "382.00",
        metric_serving_unit: "g",
        calories_kcal: "978.00",
        fat_g: "44.62",
        carbs_g: "104.74",
        protein_g: "38.81",
        saturated_fat_g: "17.31",
        monounsaturated_fat_g: "19.78",
        polyunsaturated_fat_g: "4.72",
        trans_fat_g: null,
        fiber_g: "6.50",
        sugar_g: "8.67",
        cholesterol_mg: "76.00",
        sodium_mg: "2284.00",
        potassium_mg: "791.00",
        vitamin_a_daily_pct: "15.00",
        vitamin_c_daily_pct: "56.00",
        calcium_daily_pct: "56.00",
        iron_daily_pct: "46.00"
      },
      {
        // id: 4,
        fatsecret_food_id: 36492,
        serving_id: 34391,
        retrieved_at: presentMinusXHours(4),
        food_name: "Russet Potatoes (Flesh and Skin)",
        food_type: "Generic",
        brand_name: null,
        serving_url:
          "https://www.fatsecret.com/calories-nutrition/usda/russet-potatoes-(flesh-and-skin)?portionid=34391&portionamount=1.000",
        serving_desc: '1 small (1-3/4" to 2-1/4" dia)',
        serving_qty: "1.00",
        serving_unit: 'potato small (1-3/4" to 2-1/4" dia)',
        metric_serving_amt: "170.00",
        metric_serving_unit: "g",
        calories_kcal: "134.00",
        fat_g: "0.14",
        carbs_g: "30.72",
        protein_g: "3.64",
        saturated_fat_g: "0.03",
        monounsaturated_fat_g: "0.00",
        polyunsaturated_fat_g: "0.06",
        trans_fat_g: null,
        fiber_g: "2.20",
        sugar_g: "1.05",
        cholesterol_mg: "0.00",
        sodium_mg: "8.00",
        potassium_mg: "709.00",
        vitamin_a_daily_pct: "0.00",
        vitamin_c_daily_pct: "56.00",
        calcium_daily_pct: "2.00",
        iron_daily_pct: "8.00"
      },
      {
        // id: 5,
        fatsecret_food_id: 4352576,
        serving_id: 4236813,
        retrieved_at: presentMinusXHours(6),
        food_name: "Spam Classic",
        food_type: "Brand",
        brand_name: "Hormel",
        serving_url:
          "https://www.fatsecret.com/calories-nutrition/hormel/spam-classic",
        serving_desc: "2 oz",
        serving_qty: "1.00",
        serving_unit: "serving",
        metric_serving_amt: "56.00",
        metric_serving_unit: "g",
        calories_kcal: "180.00",
        fat_g: "16.00",
        carbs_g: "1.00",
        protein_g: "7.00",
        saturated_fat_g: "6.00",
        monounsaturated_fat_g: null,
        polyunsaturated_fat_g: null,
        trans_fat_g: "0.00",
        fiber_g: "0.00",
        sugar_g: "0.00",
        cholesterol_mg: "40.00",
        sodium_mg: "790.00",
        potassium_mg: null,
        vitamin_a_daily_pct: "0.00",
        vitamin_c_daily_pct: "0.00",
        calcium_daily_pct: "0.00",
        iron_daily_pct: "2.00"
      },
      {
        // id: 6,
        fatsecret_food_id: 1641,
        serving_id: 5035,
        retrieved_at: presentMinusXHours(25),
        food_name: "Chicken Breast",
        food_type: "Generic",
        brand_name: null,
        serving_url:
          "https://www.fatsecret.com/calories-nutrition/generic/chicken-breast-ns-as-to-skin-eaten?portionid=5035&portionamount=0.500",
        serving_desc: "1/2 medium (yield after cooking, bone removed)",
        serving_qty: "0.50",
        serving_unit: "medium breast (yield after cooking, bone removed)",
        metric_serving_amt: "98.00",
        metric_serving_unit: "g",
        calories_kcal: "191.00",
        fat_g: "7.57",
        carbs_g: "0.00",
        protein_g: "28.96",
        saturated_fat_g: "2.13",
        monounsaturated_fat_g: "2.95",
        polyunsaturated_fat_g: "1.61",
        trans_fat_g: null,
        fiber_g: "0.00",
        sugar_g: "0.00",
        cholesterol_mg: "81.00",
        sodium_mg: "385.00",
        potassium_mg: "238.00",
        vitamin_a_daily_pct: "2.00",
        vitamin_c_daily_pct: "0.00",
        calcium_daily_pct: "1.00",
        iron_daily_pct: "6.00"
      },
      {
        // id: 7,
        fatsecret_food_id: 2057,
        serving_id: 8653,
        retrieved_at: presentMinusXHours(23),
        food_name: "Salmon",
        food_type: "Generic",
        brand_name: null,
        serving_url:
          "https://www.fatsecret.com/calories-nutrition/generic/salmon-raw?portionid=8653&portionamount=1.000",
        serving_desc: "1 oz boneless",
        serving_qty: "1.00",
        serving_unit: "oz, boneless, raw",
        metric_serving_amt: "28.35",
        metric_serving_unit: "g",
        calories_kcal: "41.00",
        fat_g: "1.68",
        carbs_g: "0.00",
        protein_g: "6.13",
        saturated_fat_g: "0.36",
        monounsaturated_fat_g: "0.61",
        polyunsaturated_fat_g: "0.57",
        trans_fat_g: null,
        fiber_g: "0.00",
        sugar_g: "0.00",
        cholesterol_mg: "13.00",
        sodium_mg: "13.00",
        potassium_mg: "120.00",
        vitamin_a_daily_pct: "1.00",
        vitamin_c_daily_pct: "0.00",
        calcium_daily_pct: "1.00",
        iron_daily_pct: "1.00"
      },
      {
        // id: 8,
        fatsecret_food_id: 2057,
        serving_id: 6814,
        retrieved_at: presentMinusXHours(23),
        food_name: "Salmon",
        food_type: "Generic",
        brand_name: null,
        serving_url:
          "https://www.fatsecret.com/calories-nutrition/generic/salmon-raw?portionid=6814&portionamount=1.000",
        serving_desc: "1 cup, NFS",
        serving_qty: "1.00",
        serving_unit: "cup, NFS",
        metric_serving_amt: "166.00",
        metric_serving_unit: "g",
        calories_kcal: "242.00",
        fat_g: "9.84",
        carbs_g: "0.00",
        protein_g: "35.89",
        saturated_fat_g: "2.09",
        monounsaturated_fat_g: "3.54",
        polyunsaturated_fat_g: "3.31",
        trans_fat_g: null,
        fiber_g: "0.00",
        sugar_g: "0.00",
        cholesterol_mg: "75.00",
        sodium_mg: "76.00",
        potassium_mg: "702.00",
        vitamin_a_daily_pct: "3.00",
        vitamin_c_daily_pct: "3.00",
        calcium_daily_pct: "6.00",
        iron_daily_pct: "5.00"
      },
      {
        // id: 9,
        fatsecret_food_id: 5735,
        serving_id: 21131,
        retrieved_at: presentMinusXHours(0),
        food_name: "Roasted Potato",
        food_type: "Generic",
        brand_name: null,
        serving_url:
          "https://www.fatsecret.com/calories-nutrition/generic/white-potato-roasted?portionid=21131&portionamount=1.000",
        serving_desc: '1 small (1-3/4" to 2-1/4" dia, raw)',
        serving_qty: "1.00",
        serving_unit: 'small (1-3/4" to 2-1/4" dia, raw)',
        metric_serving_amt: "110.00",
        metric_serving_unit: "g",
        calories_kcal: "164.00",
        fat_g: "7.70",
        carbs_g: "22.07",
        protein_g: "2.55",
        saturated_fat_g: "0.99",
        monounsaturated_fat_g: "2.56",
        polyunsaturated_fat_g: "3.79",
        trans_fat_g: null,
        fiber_g: "2.70",
        sugar_g: "0.99",
        cholesterol_mg: "0.00",
        sodium_mg: "111.00",
        potassium_mg: "531.00",
        vitamin_a_daily_pct: "0.00",
        vitamin_c_daily_pct: "33.00",
        calcium_daily_pct: "2.00",
        iron_daily_pct: "6.00"
      },
      {
        // id: 10,
        fatsecret_food_id: 1499022,
        serving_id: 1482281,
        retrieved_at: presentMinusXHours(2),
        food_name: "Coca-Cola Classic (20 oz)",
        food_type: "Brand",
        brand_name: "Coca-Cola",
        serving_url:
          "https://www.fatsecret.com/calories-nutrition/coca-cola/coca-cola-classic-(20-oz)",
        serving_desc: "1 bottle",
        serving_qty: "1.00",
        serving_unit: "serving",
        metric_serving_amt: "20.00",
        metric_serving_unit: "oz",
        calories_kcal: "240.00",
        fat_g: "0.00",
        carbs_g: "65.00",
        protein_g: "0.00",
        saturated_fat_g: "0.00",
        monounsaturated_fat_g: "0.00",
        polyunsaturated_fat_g: "0.00",
        trans_fat_g: "0.00",
        fiber_g: "0.00",
        sugar_g: "65.00",
        cholesterol_mg: "0.00",
        sodium_mg: "75.00",
        potassium_mg: null,
        vitamin_a_daily_pct: "0.00",
        vitamin_c_daily_pct: "0.00",
        calcium_daily_pct: "0.00",
        iron_daily_pct: "0.00"
      }
    ]);
  });
};
