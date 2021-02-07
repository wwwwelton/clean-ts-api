import { SaveSurveyResult, SaveSurveyResultModel, SurveyResultModel, SaveSurveyResultRepository } from './db-save-survey-result-protocols'

export class DbSaveSurveyResult implements SaveSurveyResult {
  constructor (private readonly saveSurveyResultRepositoryStub: SaveSurveyResultRepository) { }

  async save (data: SaveSurveyResultModel): Promise<SurveyResultModel> {
    await this.saveSurveyResultRepositoryStub.save(data)
    return null as any
  }
}
