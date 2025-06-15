import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faCheck } from '@fortawesome/free-solid-svg-icons'

const Stepper = ({ steps, title, subtitle }) => {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const goToStep = (stepIndex) => {
    setCurrentStep(stepIndex)
  }

  return (
    <div className="stepper-container">
      {/* Header */}
      <div className="stepper-header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      {/* Progress Bar */}
      <div className="stepper-progress">
        <div className="progress-line">
          <div 
            className="progress-fill" 
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />
        </div>
        <div className="progress-steps">
          {steps.map((step, index) => (
            <button
              key={index}
              className={`progress-step ${index <= currentStep ? 'completed' : ''} ${index === currentStep ? 'active' : ''}`}
              onClick={() => goToStep(index)}
              aria-label={`Go to step ${index + 1}: ${step.title}`}
            >
              {index < currentStep ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : (
                <span>{index + 1}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="stepper-content">
        <div className="step-card">
          <div className="step-header">
            <div className="step-number">
              {currentStep < steps.length - 1 ? currentStep + 1 : <FontAwesomeIcon icon={faCheck} />}
            </div>
            <div className="step-title-section">
              <h3>{steps[currentStep].title}</h3>
              <p className="step-description">{steps[currentStep].description}</p>
            </div>
          </div>
          
          <div className="step-details">
            <ul>
              {steps[currentStep].details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="stepper-navigation">
        <button 
          className="nav-btn prev" 
          onClick={prevStep}
          disabled={currentStep === 0}
          aria-label="Previous step"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          Previous
        </button>
        
        <div className="step-indicator">
          Step {currentStep + 1} of {steps.length}
        </div>
        
        <button 
          className="nav-btn next" 
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          aria-label="Next step"
        >
          Next
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  )
}

export default Stepper 