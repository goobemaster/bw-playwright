import { faker } from '@faker-js/faker';

export enum UserProfileDataScenario {
    HAPPY,
    EMPTY
}

export enum UserProfileField {
    FIRST_NAME,
    LAST_NAME,
    EMAIL,
    PASSWORD,
    CONFIRM_PASSWORD,
    DATE_OF_BIRTH,
    PHONE_NUMBER,
    ADDRESS,
    LINKEDIN,
    GITHUB
}

export class UserProfileData {
    private firstName: string = '';
    private lastName: string = '';
    private email: string = '';
    private password: string = '';
    private confirmPassword: string = '';
    private gender: string = '';
    private dob: Date = new Date();
    private phone: string = '';
    private address: string = '';
    private linkedin: string = '';
    private github: string = '';

    constructor(scenario: UserProfileDataScenario) {
        switch (scenario) {
            case UserProfileDataScenario.HAPPY:
                this.setRandomValueFor(UserProfileField.FIRST_NAME);
                this.setRandomValueFor(UserProfileField.LAST_NAME);
                this.setRandomValueFor(UserProfileField.EMAIL);
                let password = this.setRandomValueFor(UserProfileField.PASSWORD);
                this.confirmPassword = password;
                this.setRandomValueFor(UserProfileField.DATE_OF_BIRTH);
                this.setRandomValueFor(UserProfileField.PHONE_NUMBER);
                this.setRandomValueFor(UserProfileField.ADDRESS);
                this.setRandomValueFor(UserProfileField.LINKEDIN);
                this.setRandomValueFor(UserProfileField.GITHUB);
                this.gender = 'undisclosed';                
                break;
            case UserProfileDataScenario.EMPTY:
                // Nothing to do
                break;
            default:
                console.warn('No data setup found for scenario provided!');
        }
    }

    private setRandomValueFor(field: UserProfileField): string {
        switch (field) {
            case UserProfileField.FIRST_NAME:
                this.firstName = faker.person.firstName();
                return this.firstName;
            case UserProfileField.LAST_NAME:
                this.lastName = faker.person.lastName();
                return this.lastName;
            case UserProfileField.EMAIL:
                this.email = faker.internet.email();
                return this.email;                
            case UserProfileField.PASSWORD, UserProfileField.CONFIRM_PASSWORD:
                this.password = faker.internet.password();
                return this.password;                
            case UserProfileField.DATE_OF_BIRTH:
                this.dob = new Date();
                this.dob.setUTCFullYear(2025 - (Math.random() * (70 - 18) + 18));
                return this.dob.toUTCString();
            case UserProfileField.PHONE_NUMBER:
                this.phone = faker.phone.number();
                return this.phone;
            case UserProfileField.ADDRESS:
                this.address = faker.location.streetAddress();
                return this.address;
            case UserProfileField.LINKEDIN:
                this.linkedin = 'https://www.linkedin.com/in/' + faker.animal.petName().replaceAll(' ', '');
                return this.linkedin;
            case UserProfileField.GITHUB:
                this.github = 'https://github.com/' + faker.animal.petName().replaceAll(' ', '');
                return this.github;
            default:
                console.warn('No data setter found for field provided!');
        }
        return '';
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }
    
    public getEmail(): string {
        return this.email;
    }
    
    public getPassword(): string {
        return this.password;
    }
    
    public getConfirmPassword(): string {
        return this.confirmPassword;
    }
    
    public getGender(): string {
        return this.gender;
    }
    
    public getDob(): Date {
        return this.dob;
    }
    
    public getPhone(): string {
        return this.phone;
    }
    
    public getAddress(): string {
        return this.address;
    }
    
    public getLinkedin(): string {
        return this.linkedin;
    }    

    public getGithub(): string {
        return this.github;
    }        
}