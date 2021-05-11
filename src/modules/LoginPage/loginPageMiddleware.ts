import { CURRENT_LANG, CURRENT_COURSE, TOUR_OPENING } from 'appConstants';
import { Course } from 'types';
import { setCurrCourse, setCurrLang } from './loginPageReducer';

export const setLanguage = (currentLanguage: string) => {
  return (dispatch: (actionCreator: any) => void) => {
    localStorage.setItem(CURRENT_LANG, currentLanguage);
    dispatch(setCurrLang(currentLanguage));
  };
};

export const setCourse = (currentCourse: Course) => {
  return (dispatch: (actionCreator: any) => void) => {
    localStorage.setItem(CURRENT_COURSE, JSON.stringify(currentCourse));
    dispatch(setCurrCourse(currentCourse));
  };
};

export const setTourOpening = (tourOpening: string) => {
  return () => {
    localStorage.setItem(TOUR_OPENING, tourOpening);
  };
};
