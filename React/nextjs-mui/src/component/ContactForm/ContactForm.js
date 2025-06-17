"use client";
import {
    Box,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
    FormHelperText,
} from "@mui/material";
import React from 'react'

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { schema } from "./validationschema";
const CT = [
    { value: "Bahan", label: "Bahan" },
    { value: "pathein", label: "pathein" },
    { value: "maubin", label: "maubin" },
    { value: "hpa-an", label: "hpa-an" },
];

const TS = [
    { value: "wakhema", label: "wakhema" },
    { value: "pathein", label: "pathein" },
    { value: "maubin", label: "maubin" },

];


export default function ContactForm() {

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            city: "", township: "",
        },
    });

    const onSubmit = (formData) => {
        console.log("formData", formData);
        console.log("Name Input Data", formData.name);
        reset();
    };

    return (
        <div>
            <Box component="form" sx={{ p: 2 }} onSubmit={handleSubmit(onSubmit)}>

                <TextField
                    label="Name"
                    fullWidth
                    sx={{ mb: 2 }}
                    {...register("name")}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />
                <TextField
                    label="Email"
                    fullWidth
                    sx={{ mb: 2 }}
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />

                <TextField
                    label="PhoneNo"
                    fullWidth
                    sx={{ mb: 2 }}
                    {...register("phone")}
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                />


                <TextField
                    label="Address"
                    fullWidth
                    sx={{ mb: 2 }}
                    {...register("address")}
                    error={!!errors.address}
                    helperText={errors.address?.message}
                />


                <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.city}>
                    <InputLabel id="city-label">City</InputLabel>
                    <Controller
                        name="city"
                        control={control}
                        error={!!errors.city}
                        render={({ field }) => (
                            <Select
                                {...field}
                                labelId="city-label"
                                label="City"
                                defaultValue=""
                                value={field.value || ""}//Ensure controlled valuess
                            >
                                {CT.map((city, index) => (
                                    <MenuItem key={index} value={city.value}>
                                        {city.label}
                                    </MenuItem>
                                ))}

                            </Select>
                        )}
                    />
                    <FormHelperText>{errors.city?.message}</FormHelperText>
                </FormControl>


                <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.township}>
                    <InputLabel id="township-label">Township</InputLabel>
                    <Controller
                        name="township"
                        control={control}
                        error={!!errors.township}
                        render={({ field }) => (
                            <Select
                                {...field}
                                labelId="township-label"
                                label="Township"
                                defaultValue=""
                                value={field.value || ""}//Ensure controlled valuess
                            >
                                {TS.map((township, index) => (
                                    <MenuItem key={index} value={township.value}>
                                        {township.label}
                                    </MenuItem>
                                ))}

                            </Select>
                        )}
                    />
                    <FormHelperText>{errors.township?.message}</FormHelperText>
                </FormControl>
                <Button variant="contained" type="save">SAVE</Button>
            </Box>


        </div>
    );
}
