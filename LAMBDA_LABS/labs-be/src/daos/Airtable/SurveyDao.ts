import Airtable, { FieldSet, Records } from "airtable";
import { AirtableBase } from "airtable/lib/airtable_base";

class SurveyDao {
  private api_key: string;
  private base_id: string;
  public airtable: AirtableBase;

  constructor() {
    if (!process.env.AT_API_KEY) {
      throw new Error("Missing Airtable API key");
    }
    if (!process.env.AT_SMT_BASE_ID) {
      throw new Error("Missing Airtable base ID");
    }

    this.api_key = process.env.AT_API_KEY;
    this.base_id = process.env.AT_SMT_BASE_ID;
    this.airtable = new Airtable({ apiKey: this.api_key }).base(this.base_id);
  }

  public async getAll(): Promise<Records<FieldSet>> {
    const surveys = await this.airtable("Labs - TBSurveys")
      .select({
        view: "Grid view",
      })
      .all();

    return surveys;
  }

  public async getCohort(cohort: string): Promise<Records<FieldSet>> {
    const surveys = await this.airtable("Labs - TBSurveys")
      .select({
        view: cohort,
      })
      .all();

    return surveys;
  }
}

export default SurveyDao;
