# Questionnaire

🔙 [Back to Main Page](../readme.md)

## Question 1.

> _Imagine you are tasked with designing a quality assurance strategy for a complex, multi-platform application with tight release deadlines. What steps would you take to ensure robust testing without delaying the release schedule?_

### Answer

I can think of the following in no particular order:

- Prioritization of features, tasks for various levels of testing, together with relevant stakeholders is key.
- Careful consideration of ratio of manual vs automation efforts. I'd say automation shall focus on building up defense against regression, whilst newly added features may be covered with manual testing.
- Revision of UAT approach and priorities. For certain projects, or during such temporary crunch periods pre-emptive approach in early stages of the SDLC should be favored.
- Tasks to be broken down: frequent deliveries and testing.
- Developers as first class citizens in testing. Revised approach, unit test coverage goals.
- Balanced releases with similar risk scores.
- All hands on board: organising cross team test efforts. Providing guidance, support. Anyone can and should test, considering their area and level of expertise.

## Question 2.

> _How would you design an automation framework that supports testing across multiple applications, integrates seamlessly into the CI/CD pipeline, and is maintainable over time? What tools and technologies would you use, and why?_

### Answer

For the requirements implied in the question, a robust framework is necessary. I am partial to strictly typed languages, and custom made or customized frameworks, however that alone does not guarantee fulfillment of such requirements. I lived and worked through the vast evolution of test automation. Tools and frameworks come and go... but the basics remain.

For UI test automation Webdriver has come a long way. Its wire protocol is enshrined in a standard. I'd definitely incorporate Webdriver either by directly using its API, or as abstracted away in a framework.

For API test automation a simple, quick but highly configurable HTTP client library, combined with a layer of domain specific abstraction (data, logic etc) is usually sufficient.

I designed my earlier frameworks to be modular. This lends itself for re-using the same framework for truly end to end testing, as well as to facilitate cross-compatibility. Configurability is key here. Seamless dependency management as well. For me this route is the result of an evolution, on a need-to basis. I am new to Playwright, but juding by my limited exposure it ticks a lot of boxes. I can imagine building on top and around it.

In any case, I'd definitely incorporate Cucumber for behavior driven development.

To use the company specific testing framework in a CI/CD pipeline the framework may be packaged as a Docker image. This solves many different issues, and is a popular approach nowadays. Of course it may be too heavy of a solution in some instances, or in the early days of development.

As for maintainability: KISS - but with elegance.

## Question 3.

> _You discover that a critical production bug has escaped despite thorough testing. How would you approach analyzing the root cause, preventing recurrence, and improving the overall QA process?_

### Answer

Although not implied in the question, first such critical bugs need to be filed and escalated on various levels. The change may need to be rolled back, or traffic redirected to a different leg.

The options for root cause analysis is always limited on production, compared to local or development environments. It is worth spending some time analysing the logs or any such components of the system that are accessible for the QA team; however a thorough analysis should be done on a different environment configured to mirror the same topology, versions, settings etc.

QA typically plays a limited, assistent role in the analysis. It is worth checking the following:

- What were the recent changes in the released version? Narrowing down the impacted systems (is it a service, database, external resource? etc)
- Monitoring the system and checking the available logs real-time as the issue is being re-produced.

If the issue cannot be reproduced on a non-production environment, then its likely a platform issue, and therefore the relevant teams and parties shall be prominently involved.

Prevention in my opinion consists of the following:

- Revision of test cases: looking for blind spots.
- Adding dedicated automated tests.
- Revision of the release process, CI/CD pipelines - if relevant.

## Question 4.

> _In your role, you'll often work with diverse teams of developers, testers, and product owners. How would you promote a culture of quality, mentor team members on testing best practices, and align everyone towards achieving quality objectives?_

### Answer

Fostering a culture of quality is an on-going effort. There isn't one gold standard to follow; the current state and progress should be monitored and measured, and the results shall be used to determine what reinforcing strategies and factors should be focused on and improved.

Quality assurance professionals are usually involved in this affair, but quality objectives cannot be reached by their work alone; quality management is a shared responsibility.

Some common initiatives and incentives to promote a culture of quality I can think of:

- Leadership sets the example:
  - Well defined processes and review system with a willingness to evolve it over time.
  - Openness to feedback, especially if it touches on already recognised pain points.
  - Focused meetings.
  - Demonstrated commitment.
- Merger of quality goals into planning and innovative stages; early in the life-cycle
- No silos. Whatsoever.
- Dedicated time for quality related activities. Quality should be planned in to tasks. Regardless of role.
- Iterative development is a friend, as long as it does not compromise on quality. Careful assesment what may be prototyped and what cannot be.
- Early detection and subsequent analysis of:
  - Unnecessary refactoring
  - Wasteful efforts
  - Areas that seemingly need constant re-works
- People tend to appreciate seeing their progress, especially visualized; they work towards goals and achievements. The possibilities to combine this with quality goals is endless.

