import { SaveSurveyResult, SaveSurveyResultParams, SurveyResultModel, SaveSurveyResultRepository } from './db-save-survey-result-protocols'

export class DbSaveSurveyResult implements SaveSurveyResult {
  constructor (private readonly saveSurveyResultRepositoryStub: SaveSurveyResultRepository) { }

  async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
    const surveyResult = await this.saveSurveyResultRepositoryStub.save(data)
    return surveyResult
  }
}
