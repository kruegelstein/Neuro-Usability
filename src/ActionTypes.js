// constants for the actions

const actionTypes = {
  AddUserSuccess: 'add_user_success',
  AddUserError: 'add_user_error',
  AddUser: 'add_user',
  ChangeForm: 'change_form_value',
  SelectIntro: 'selected_intro',
  SelectRating: 'selected_rating',
  SelectAdmin: 'selected_admin',
  SelectGood: 'selected_good',
  SelectDemographics: 'selected_demographics',
  SelectBad: 'selected_bad',
  AddUserToForm: 'adding_user_to_form',
  SelectLetter: 'select_letter',
  DeselectLetter: 'deselect_letter',
  Submit: 'submit',
  SaveTime: 'saving_time',
  SubmitUserId: 'submit_user_id',
  SubmitDemographics: 'submit_demographics',
  SetLettersToFind: 'set_letters_to_find',
  SelectRound2: 'select_round2',
  SelectRound3: 'select_round3',
  SelectRound4: 'select_round4',
  SelectRound5: 'select_round5',
  RecognizeClick: 'recognize_click',
  SaveClickPosition: 'save_click_position',
  SelectThanks: 'select_thanks',
  StoreInDB: 'store_in_db',
  StoreInDBSuccess: 'store_in_db_success',
  StoreInDBError: 'store_in_db_error',
};

export default actionTypes;
