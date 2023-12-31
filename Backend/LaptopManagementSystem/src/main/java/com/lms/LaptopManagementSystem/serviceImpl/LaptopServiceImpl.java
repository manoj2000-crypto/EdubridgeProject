package com.lms.LaptopManagementSystem.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lms.LaptopManagementSystem.entity.Laptop;
import com.lms.LaptopManagementSystem.repository.LaptopRepository;
import com.lms.LaptopManagementSystem.services.LaptopActions;

@Service
public class LaptopServiceImpl implements LaptopActions {

	@Autowired
	private EmailService emailService;

	@Autowired
	private LaptopRepository laptopRepository;

	@Override
	public Laptop addLaptopDetails(Laptop laptopObj) {
		return laptopRepository.save(laptopObj);
	}

	@Override
	public List<Laptop> readAllDetailsFromDB() {
		return laptopRepository.findAll();
	}

	public Laptop readLaptopFromDb(int laptopId) {
		Optional<Laptop> laptopObjFromDb = laptopRepository.findById(laptopId);

		if (laptopObjFromDb.get() != null)
			return laptopObjFromDb.get();
		else
			return new Laptop();
	}

	public void deleteLaptopById(int deleteLaptopId) {
		Optional<Laptop> laptopObjFromDb = laptopRepository.findById(deleteLaptopId);
		if (laptopObjFromDb.get() != null) {
			laptopRepository.deleteById(deleteLaptopId);
		}
	}

	public void deleteLaptops() {
		laptopRepository.deleteAll();
	}

	public void updateLaptopDetails(int laptopId, Laptop newLaptopValue) {
		Optional<Laptop> laptopObjFromDb = laptopRepository.findById(laptopId);
		if (laptopObjFromDb.get() != null) {
			Laptop existingLaptopDetails = laptopObjFromDb.get();
			existingLaptopDetails.setLaptopName(newLaptopValue.getLaptopName());
			existingLaptopDetails.setLaptopSerialNumber(newLaptopValue.getLaptopSerialNumber());
			existingLaptopDetails.setLaptopWarrantyStatus(newLaptopValue.getLaptopWarrantyStatus());
			existingLaptopDetails.setLaptopPrice(newLaptopValue.getLaptopPrice());
			laptopRepository.save(existingLaptopDetails);
			emailService.sendEmail("RECEIVER'S EMAIL ADDRESS", "System Generated Email",
					"***DO NOT RESPOND***\n================================\n(INFO): Laptop details has been updated...!!!!\n\n\nValues :-\nID : "
							+ laptopId + "\nName : " + newLaptopValue.getLaptopName() + "\nPrice : "
							+ newLaptopValue.getLaptopPrice() + "\nSerial Number : "
							+ newLaptopValue.getLaptopSerialNumber() + "\nWarrenty Status : "
							+ newLaptopValue.getLaptopWarrantyStatus() + "\n\n\nThank You!!!");
		}
	}

}
